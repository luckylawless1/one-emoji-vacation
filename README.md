# One Emoji, One Dream Vacation

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/luckylawless1/one-emoji-vacation/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/luckylawless1/one-emoji-vacation/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

A [make.fun](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) bounty entry for **One Emoji, One Dream Vacation**.

## The entry

`main.ts` (Node 22, standard library only) writes exactly one emoji to
`/output/entry.txt`:

🏝 — the desert island. A beach, a faraway place, and a whole dream trip in a
single glance: the postcard a stranger sees before reading a word.

The program self-checks the gate before it writes: the entry must be exactly
one code point, non-whitespace, and no more than 8 characters — then it reads
the file straight back and proves the write landed byte-identical.

## Run

```sh
node main.ts
```

This writes `/output/entry.txt` containing the single emoji 🏝 (U+1F3DD,
4 bytes UTF-8, no trailing newline).
