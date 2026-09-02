---
title: "Leaderboard Score Rejection Settings"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/settings/score-rejection"
release: 495.2
---

## On this page

- [Leaderboard Score Rejection Settings](#internalH1Link0)

---

## Leaderboard Score Rejection Settings

**Reject Scores Under** ``  
All scores that are posted that are under this score will be rejected by the leaderboard.  This value is optional.

**Reject Scores Over** ``  
All scores that are posted that are over this score will be rejected by the leaderboard.  This value is optional.

**Score Rejection Mode**  
If set to `Shadow Ban`, players who submit scores that fall outside the permitted range will automatically be [shadow banned](../../leaderboards/shadow-banned-scores.md).  `Quiet fail` will cause the submitted score to appear as if it was accepted by the leaderboard, but it will not be inserted into the leaderboard.  `Noisy Fail` will throw an error message if the score it outside the permitted range.

**Reject Scores On Adjustment**  
If set, when scores are [adjusted](../../leaderboards/api-end-points/scores/adjust-score.md) if the updated score falls outside of the acceptable range the score will then be rejected using the set rejection mode.
