---
title: "Languages in API Requests"
source: "https://www.construct.net/en/game-services/manuals/game-services/languages"
release: 487
---

## On this page

- [Overview](#supported-requested-language-iso-codes)
- [Supported Requested Language ISO Codes](#internalH1Link1)

---

## Overview

You can optionally pass a language ISO code with all requests with the parameter `requestedLanguage`.  If you do not specify a language ISO code, the games default language will be used which can be configured in your [CGS account](https://www.construct.net/en/game-services/account).

If your plan supports it the property `responseLanguage` will be the same as the requested language and all translatable text elements in the response will be returned in this language, except for error messages in the top level `errorMessage` property which will always return in English.

If your plan doesn't support it translations (for example you've run out of translation credits), the property `responseLanguage` will default to the language the source translatable text was written in.  An error will not be thrown to ensure the client still receives an expected response.

## Supported Requested Language ISO Codes

Below is a list of permitted ISO codes for passing with the `requestedLanguage` parameter.

```none
AR = Arabic
BG = Bulgarian
CS = Czech
DA = Danish
DE = German
EL = Greek
EN-GB = English (British)
EN-US = English (American)
ES = Spanish
ES-419 = Spanish (Latin American)
ET = Estonian
FI = Finnish
FR = French
HE = Hebrew
HU = Hungarian
ID = Indonesian
IT = Italian
JA = Japanese
KO = Korean
LT = Lithuanian
LV = Latvian
NB = Norwegian Bokmål
NL = Dutch
PL = Polish
PT-BR = Portuguese (Brazilian)
PT-PT = Portuguese (all Portuguese variants excluding Brazilian Portuguese)
RO = Romanian
RU = Russian
SK = Slovak
SL = Slovenian
SV = Swedish
TH = Thai
TR = Turkish
UK = Ukrainian
VI = Vietnamese
ZH-HANS = Chinese (simplified)
ZH-HANT = Chinese (traditional)
```
