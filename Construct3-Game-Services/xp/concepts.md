---
title: "XP Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/concepts"
release: 495.2
---

## On this page

- [What is the XP Service?](#xp-bonuses)
- [XP Bonuses](#xp-leaderboard)
- [XP Leaderboard](#internalH1Link2)

---

## What is the XP Service?

The XP service currently allows you to track players XP.  XP is a simple number associated with a player.  XP cannot be below zero, and the maximum value is **9223372036854775806**.

You can add or remove XP to a player at any time.  It is also possible to define multiple XP ranks, unlocked by the player when they reach that ranks XP target.

## XP Bonuses

It is possible to setup bonus XP dates.  For example, you can define a weekend where all XP earnt is doubled (EG a double XP weekend).  Bonuses are rounded up, for example if a player earns 3 XP during a 1.5x bonus XP period, the 4.5 XP earnt will be rounded up to 5.

If there are multiple bonuses running concurrently, the bonuses are treated individually before being added to the players account.  For example, if there are two bonuses running at 2x and 10x, and a player earns 5 XP, the amount of XP added to the players account is 60, calculated as `(5*2) + (10*2)`.

## XP Leaderboard

As soon as you interact with the XP service an XP leaderboard will be created in your CGS account.  This leaderboard is created in addition to any leaderboards your plan includes.  Use of this leaderboard is optional, but allows you to track players XP rank as well as the players XP history.
