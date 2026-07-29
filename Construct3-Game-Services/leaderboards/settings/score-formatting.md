---
title: "Score Formatting"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/settings/score-formatting"
release: 495
---

## On this page

- [Numeric Score Format](#numeric-score-format)
- [Time Score Format](#time-score-format)
- [Currency Score Format](#currency-score-format)
- [Custom Format](#custom-format)

---

All scores are submitted as int64's.  There are three types of score formats:

- Numeric
- Time
- Currency

Each score format has formatting options allowing you to customise how the formatted score is returned in the responses.

## Numeric Score Format

**Currency Symbol** ``  
Appended in front of the score value, maximum length of 3 characters. With this value set to £, a score of 12 will render as "£12".

**Suffix** ``  
Appended to the end of scores, maximum length of 32 characters. With this value set to Grog Tokens, a score of 12 will render as "12 Grog Tokens".

**Subunits** ``  
The number of subunits this currency has. Most currencies have 100 subunits. Setting this to 100 and rendering a score of 500 will show as 5.00 - setting this to 0 and rendering a score of 500 will show as 500

**Hide Subunits if Zero** ``  
If set, a score of $10.00 will render as $10

**Hide thousands separator** ``  
If set, a score of $1,000,000 will render as $1000000/dd]

## Time Score Format

The submitted score value is treated as milliseconds.

**Friendly Mode** ``  
Renders a time of 1:30:29 as "1 hour, 30 minutes & 29 seconds".

 If enabled, all other time score format options are disabled.

**Score Accuracy**  
The accuracy to render times to. If scores never reach over 60 minutes, you can set this value to minutes.

**Time Part Separator** ``  
The symbol between parts of a time. Defaults to : - 1:02:32

**Hide Milliseconds** ``  
Set if millisecond accuracy is not required to be rendered on scores.

## Currency Score Format

The submitted score value is treated as the smallest unit of the currency.  For example, if you show your scores as USD a submitted score of 123 would represent $1.23, or 123 cents.

**Currency Symbol** ``  
Appended in front of the score value, maximum length of 3 characters. With this value set to £, a score of 12 will render as "£12".

**Suffix** ``  
Appended to the end of scores, maximum length of 32 characters. With this value set to Grog Tokens, a score of 12 will render as "12 Grog Tokens".

**Subunits** ``  
The number of subunits this currency has. Most currencies have 100 subunits. Setting this to 100 and rendering a score of 500 will show as 5.00 - setting this to 0 and rendering a score of 500 will show as 500

**Hide Subunits if Zero** ``  
If set, a score of $10.00 will render as $10

**Hide Thousands Separator** ``  
If set, a score of $1,000,000 will render as $1000000

## Custom Format

You do not need to use these score formatters.  If building your own solution the [score object](../../leaderboards/api-objects/score.md) always returns the raw score value which you can manipulate to display however you wish.
