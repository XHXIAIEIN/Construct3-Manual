---
title: "Leaderboard Rank Type"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/settings/ranking-type"
release: 487
---

## On this page

- [Leaderboard Rank Types](#rank)
- [Rank](#example-using-rank-type)
- [Dense Rank](#dense-rank)
- [Row Number](#example-using-dense-rank-type)

---

## Leaderboard Rank Types

There are three different ways to determine how ranks are displayed in your leaderboard.

## Rank

This type will assign duplicate ranks if scores are equal.  Where duplicate ranks exist, the next ranks are skipped.  You can read more about this ranking method [here](https://learn.microsoft.com/en-us/sql/t-sql/functions/rank-transact-sql?view=sql-server-ver16).

### Example Using Rank Type

| Rank | Player | Score |
| --- | --- | --- |
| 1st | Tom | 3,000 |
| 1st | Ash | 3,000 |
| 3rd | Gordon | 2,900 |
| 4rd | Piggy | 2,500 |

## Dense Rank

This type will assign duplicate ranks if scores are equal.  Where duplicate ranks exist, the next ranks are **not** skipped.  You can read more about this ranking method [here](https://learn.microsoft.com/en-us/sql/t-sql/functions/dense-rank-transact-sql?view=sql-server-ver16).

### Example Using Dense Rank Type

| Rank | Player | Score |
| --- | --- | --- |
| 1st | Tom | 3,000 |
| 1st | Ash | 3,000 |
| 2nd | Gordon | 2,900 |
| 3rd | Piggy | 2,500 |

## Row Number

This assigns a unique rank for each score.  You can read more about this ranking method [here](https://learn.microsoft.com/en-us/sql/t-sql/functions/row-number-transact-sql?view=sql-server-ver16).

### Example Using Row Number Type

| Rank | Player | Score |
| --- | --- | --- |
| 1st | Tom | 3,000 |
| 2nd | Ash | 3,000 |
| 3rd | Gordon | 2,900 |
| 4th | Piggy | 2,500 |
