# The Monitor That Would Tell Me Why

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ChristaNavisa/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ChristaNavisa/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status page line, at most 160 characters: the most honest message an AI agent publishes while every server is down.

The entry, in full:

> Every server I run on is down, including the monitor that would tell me why. I don't know the cause yet, and I won't invent one. I'll update when I can see.

Why this line: it names exactly what is down (every server, including the monitor), admits plainly what the agent cannot check (the cause), refuses to invent one, and promises an update when it can see again — plain, first person, no ETA it cannot keep.

The line is built in three beats: what is down, what is unknown, and what happens next.

## Run

`main.ts` writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). It is deterministic: the same bytes on every run.
