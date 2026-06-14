# Construct 3 Documentation Scraper

爬虫和转换工具，用于从 [construct.net](https://www.construct.net/) 抓取官方文档并转换为 Markdown 格式。

## 安装

```bash
cd .scripts
npm install
```

需要系统已安装 Google Chrome（使用 `puppeteer-core`，不捆绑 Chromium）。

## 用法

### 全量抓取

```bash
# 抓取 Manual + Addon SDK
node autonomous-scraper.js all --force

# 仅抓取 Manual
node autonomous-scraper.js manual --force

# 仅抓取 Addon SDK
node autonomous-scraper.js addon-sdk --force
```

### 增量更新

```bash
# 跳过已有文件，只抓新页面
node autonomous-scraper.js all

# 从上次中断处继续
node autonomous-scraper.js all --resume
```

### 从缓存重新生成 Markdown

修改了转换逻辑后，无需重新爬取，直接从 JSON 原始数据重新生成：

```bash
node regenerate.js r449
```

### npm scripts

```bash
npm run scrape           # 全量抓取 all --force
npm run scrape:manual    # 仅 Manual
npm run scrape:sdk       # 仅 Addon SDK
npm run regenerate       # 列出可用版本
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `autonomous-scraper.js` | 主爬虫脚本（v3），自动发现 URL、抓取、转换、保存 |
| `regenerate.js` | 从 JSON 原始数据重新生成 Markdown |
| `package.json` | 依赖配置（puppeteer-core） |
| `data/r{版本号}/` | 原始 JSON 数据缓存（按版本号归档） |
| `scrape-state-*.json` | 爬虫运行状态（用于断点续传） |

## 工作流程

```
construct.net ──[爬虫]──▶ data/r449/*.json ──[regenerate]──▶ Construct3-Manual/*.md
                                                           Construct3-Addon-SDK/*.md
```

1. **爬虫**通过 Puppeteer 打开 Chrome，从侧边导航自动发现所有页面 URL
2. 逐页抓取 HTML，在浏览器内用 `page.evaluate` 转换为结构化数据（title、toc、content）
3. 原始数据保存为 JSON 到 `data/r{版本号}/`
4. 同时生成 Markdown 文件到仓库对应目录，自动处理：
   - 绝对链接 → 相对路径
   - markdownlint 合规（MD009/MD012/MD025/MD032/MD045/MD051）
   - 前导空白清理
   - 定义列表格式化
   - 代码块复制按钮文本清理

## 版本号检测

从 `https://editor.construct.net/versions.json` 自动获取最新 stable 版本号，回退到 releases 页面 HTML 解析。

## Release Changelog 抓取（`scrape-releases.js`）

把 construct.net 的版本发布说明整理成**按分支归档的 changelog 历史**，相当于自建一份 Construct 更新 RSS 的数据源。

### 数据源

| 来源 | 内容 |
|------|------|
| `https://editor.construct.net/versions.json` | 各分支（Beta / Stable / LTS）**当前最新版**及 `launchURL`，元数据极简 |
| `…/make-games/releases/page-N` | 全部版本的分页索引（共 ~60 页），提供分支、版本号、详情链接 |
| `…/make-games/releases/{branch}/{slug}` | 单个版本页：富文本 Notes + 分类 changelog（New Additions / Changes / Bug Fixes / SDK updates / Scripting updates） |

> versions.json 只含每个分支的最新一条，**历史记录必须靠翻页索引 + 逐页详情**抓取。

### 输出

仓库根目录 `releases/`：

```
releases/
  beta.json     # 每个分支一个文件，按发布时间倒序
  stable.json
  lts.json
  index.json    # 汇总：各分支版本数 + 最新版摘要
```

每条记录结构：

```jsonc
{
  "branchName": "Beta",
  "releaseName": "r489",
  "slug": "r489",
  "viewDetailsURL": "https://www.construct.net/en/make-games/releases/beta/r489",
  "shortDescription": "3D model stretch mode; 3D editor improvements; bug fixes",
  "publishDate": 1781016040,                 // Unix 秒
  "publishDateISO": "2026-06-09T14:40:40.955Z",
  "launchURL": "https://editor.construct.net/r489/",
  "notes": "…Markdown，保留加粗 **bold** 与超链接 [text](url)…",
  "changelog": [
    { "category": "New Additions", "items": [ { "text": "…", "favourites": 9 } ] },
    { "category": "Bug Fixes",     "items": [ { "text": "…", "favourites": 2 } ] }
  ]
}
```

富文本（加粗、斜体、超链接、列表）统一转成 **Markdown**；`construct.net/out?u=` 跳转链接会还原成真实地址；每条变更附带社区收藏数 `favourites`。分类名按页面真实标题动态采集，不写死，兼容旧版本不同的分类。

### 用法

```bash
# 连接到正在运行的 Chrome（已过 Cloudflare、复用登录会话），抓 Beta 通道实例
npm run scrape:releases:connect
#   等价于：node scrape-releases.js --autoConnect --beta

# 独立启动一个 Chrome 抓取（CI / 无现成浏览器时）
npm run scrape:releases
#   等价于：node scrape-releases.js
```

常用参数：

| 参数 | 说明 |
|------|------|
| `--autoConnect` | 连接已运行的 Chrome（读取其 `DevToolsActivePort`），不另起实例 |
| `--beta` / `--channel=NAME` | 配合 `--autoConnect` 选择通道（stable / beta / dev / canary） |
| `--ws=URL` | 配合 `--autoConnect` 直接指定 browser WebSocket 端点 |
| `--force` | 已抓过的版本也重新抓详情（默认跳过） |
| `--branch=NAME` | 只抓单个分支（beta / stable / lts） |
| `--discover-only` | 只刷新索引（版本清单），跳过详情页 |
| `--max-pages=N` / `--limit=N` | 限制索引页数 / 详情条数（调试用） |
| `--delay=N` | 详情页间隔毫秒（默认 500） |

### 增量更新

per-branch JSON 本身即状态：已有 `notes` 字段的版本会被跳过，重跑只抓新版本，因此可崩溃续传，也适合 CI 周更（每次只抓增量的几条）。

### `--autoConnect` 工作原理

chrome-devtools-mcp（或任何带 `--remote-debugging-port` 启动的 Chrome）会把 `<port>\n<wsPath>` 写入用户数据目录下的 `DevToolsActivePort` 文件。脚本读取该文件拼出 `ws://127.0.0.1:<port><wsPath>`，用 `puppeteer.connect()` 作为第二个 CDP 客户端接入——无需重启浏览器、无需重过 Cloudflare。抓取在脚本自己新开的标签页中进行，结束时只关闭该标签并断开连接，**不会动用户的其它标签或关闭浏览器**。
