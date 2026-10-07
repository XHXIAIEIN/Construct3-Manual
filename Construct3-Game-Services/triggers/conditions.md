---
title: "Conditions"
source: "https://www.construct.net/en/game-services/manuals/game-services/triggers/conditions"
release: 495.2
---

## On this page

- [Achievements](#achievements)
- [Game](#game)
- [Other](#other)
- [Player](#player)
- [Special](#special)

---


## Achievements

**Has achievement** `achievement`  
Tests if this player has been awarded an achievement.This condition allows the operators: .

**Doesn't have achievement** `achievement`  
Tests if this player hasn't been awarded an achievement.This condition allows the operators: .

## Game

**Active user count** `integer`  
Tests against this games current active user count.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Any running XP bonuses** `bool`  
Tests if there are currently any XP bonuses running.This condition allows the operators: `Is`  and  `Is not`.

## Other

**Date** `date`  
Tests the against the current date.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

## Player

**Email verification status** `bool`  
Tests if the players email address is verified or not.This condition allows the operators: `Is`  and  `Is not`.

**Consecutive days signed in** `integer`  
Tests the current number of consecutive days this player has logged in for.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total successfull sign ins** `integer`  
Tests the all-time total number of sign ins this player has performed.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total connected sign in providers** `integer`  
Tests the total number of sign in providers this player currently has available.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total emails sent to player** `integer`  
Tests the all-time total number of emails despatched to this player.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total ratings cast** `integer`  
Tests the all-time total number of ratings this player has cast accross all objects.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total uploaded cloud saves** `integer`  
Tests the total number of cloud saves this player currently has.  This is the sum of bucket saves + private saves.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total uploaded private saves** `integer`  
Tests the total number of private cloud saves this player currently has.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total uploaded bucket saves** `integer`  
Tests the total number of cloud saves this player currently has in buckets.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Has sign in provider** `sign in provider`  
Tests if this player has a specified sign in provider currently available to their account.This condition allows the operators: .

**Doesn't have sign in provider** `sign in provider`  
Tests if this player doesn't have a specified sign in provider available to their account.This condition allows the operators: .

**Player name** `string`  
Tests the players current player name.This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**XP** `integer`  
Tests the players current XP value.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Average rating percent** `percentage`  
Tests against the player current average rating percentage.  0 means they always vote the minimum, 100 means they always vote the maximum.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Account age** `time period`  
Tests against the current age of this players account.This condition allows the operators: `Is greater than`  and  `Is less than`.

**Total bucket cloud save storage used (bytes)** `integer`  
Tests against how much cloud save storage in bytes this player has currently consumed.  This is the sum of the players private storage + cloud saves in buckets.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total private cloud saves storage used (bytes)** `integer`  
Tests against how much private cloud save storage in bytes this player has currently consumed.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Total cloud saves storage used (bytes)** `integer`  
Tests against how much cloud save storage in buckets in bytes this player has currently consumed.This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

## Special

These conditions are only avavilable for some [whens](../triggers/when.md) and allow you to test against available when object properties.

**Posted score value** `integer`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Amount of XP awarded** `integer`  
This condition is only available with the whens `XP awarded`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Amount of XP deducted** `integer`  
This condition is only available with the whens `XP deducted`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**First sign in today** `bool`  
This condition is only available with the whens `Sign in`. This condition allows the operators: `Is`  and  `Is not`.

**Has previously read message** `bool`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`  and  `Is not`.

**Channel name** `string`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Channel name** `string`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Message title** `string`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Message text** `string`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Message reads** `integer`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Message unique reads** `integer`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Message published** `date`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Channel total messages** `integer`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Channel last broadcast** `date`  
This condition is only available with the whens `Read message`, `Cast message rating`  or  `Update message rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Cloud save ID** `string`  
This condition is only available with the whens `Create cloud save`, `Delete cloud save`, `Cast cloud save rating`  or  `Update cloud save rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Cloud save key** `string`  
This condition is only available with the whens `Create cloud save`, `Delete cloud save`, `Cast cloud save rating`  or  `Update cloud save rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Cloud save name** `string`  
This condition is only available with the whens `Create cloud save`, `Delete cloud save`, `Cast cloud save rating`  or  `Update cloud save rating`. This condition allows the operators: `Starts with`, `Doesn't start with`, `Ends with`, `Doesn't end with`, `Contains`, `Doesn't contain`, `Equals`  and  `Doesn't equal`.

**Cloud upload date** `date`  
This condition is only available with the whens `Create cloud save`, `Delete cloud save`, `Cast cloud save rating`  or  `Update cloud save rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Cloud save size (bytes)** `integer`  
This condition is only available with the whens `Create cloud save`, `Delete cloud save`, `Cast cloud save rating`  or  `Update cloud save rating`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Posted score personal best** `bool`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is`  and  `Is not`.

**Posted score global rank %** `percentage`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is greater than`  and  `Is less than`.

**Posted score global rank** `integer`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Posted score country rank %** `percentage`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is greater than`  and  `Is less than`.

**Posted score country rank** `integer`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.

**Leaderboard total scores** `integer`  
This condition is only available with the whens `Leaderboard score posted`  or  `Leaderboard score adjusted`. This condition allows the operators: `Is`, `Is not`, `Is greater than`  and  `Is less than`.
