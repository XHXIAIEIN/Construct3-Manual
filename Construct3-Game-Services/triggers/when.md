---
title: "Whens"
source: "https://www.construct.net/en/game-services/manuals/game-services/triggers/when"
release: 487
---

## On this page

- [Player](#player)
- [Achievements](#achievements)
- [Leaderboards](#leaderboards)
- [XP](#xp)
- [Broadcasts](#broadcasts)
- [CloudSaves](#cloudsaves)

---

Whens define when a trigger is checked.  Some whens allow you to specify optional extra conditions, for example **Sign in** allows you to optionally specify a specific sign in provider (for example Discord).  Below is a list of all currently supported whens:

## Player

**Email verification status changes**  
Triggers when a players email becomes verified, or they change their email address and it becomes unverified.

**Sign in**  
Triggers when a player signs in.  If a player signs in and it causes an account to be created, and triggers with **Account created** are first run, then **Sign in** is run.

**Disconnect**  
Triggers when a player disconnects a login provider from their account.  This can never fire for username/password or email sign in methods.

**Link**  
Triggers when a player links another login provider to their account.  This can never fire for the username/password or email sign in methods.

**Delete avatar**  
Triggers when a player has an avatar, and they choose to delete it.

**Set new avatar**  
Triggers when a player uploads a custom avatar.  This is not triggered for default avatars taken from login providers.

**Change player name**  
Triggers when a players player name changes.  The player name is the public facing name for a player.

**Account created**  
Triggers immediately after a new account is created.

**Email sent**  
Triggers when an email is sent to a plaer, for example a forgotten password or login email.

## Achievements

**Achievement awarded**  
Triggers when an achievement is awarded to a player.  For progressive achievements, this is not triggered unless the achievement is actually awarded.  It's important to note that this triggers actions will fire multiple times if the achievement is awarded more than once.

**Achievement un-awarded**  
Triggers when an achievement is unawarded from a player.  For progressive achievements, this is not triggered unless the achievement is actually unawarded.  It's important to note that this triggers actions will fire multiple times if the achievement is unawarded more than once.

## Leaderboards

**Leaderboard score posted**  
Triggers when a new score is posted to a leaderboard.

**Leaderboard score adjusted**  
Triggers when an adjustment to a score in a leaderboard is made.

## XP

**XP awarded**  
Triggers when XP is awarded to a player.

**XP deducted**  
Triggers when XP is deducted from a player.

**Promoted to rank**  
Triggers when XP is awarded to a player causing them to be promoted to a new XP rank.

**Demoted to rank**  
Triggers when XP is deducted from a player causing them to be demoted to a new XP rank.

## Broadcasts

**Read message**  
Triggers when a player reads a broadcast message.

**Cast message rating**  
Triggers when a player casts a rating on a broadcast message for the first time.  This will trigger up to once per broadcast message.

**Update message rating**  
Triggers when a player modifies an existing rating they've cast on a broadcast message.

## CloudSaves

**Create cloud save**  
Triggers when a player creates a new cloud save.

**Delete cloud save**  
Triggers when a player deletes a cloud save.

**Cast cloud save rating**  
Triggers when a player cast a rating on a cloud save for the first time.  This will trigger up to once per cloud save.

**Update cloud save rating**  
Triggers when a player modifies an existing rating they've cast on a cloud save.
