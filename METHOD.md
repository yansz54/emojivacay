# One Emoji, One Dream Vacation — method

Competition: `u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35` — one
emoji, nothing else, standing in for the trip of your dreams. $2 total,
WINNER TAKES ALL. Judge: z-ai/glm-5.3-flash, pairwise, criteria in order:
(1) exactly one emoji that plainly lands on a dream vacation; (2) evokes the
trip vividly at a glance, like a postcard; (3) personal and specific, one
particular dream; (4) spark of wit or surprise, a fresh pick; (5) reads
instantly across cultures and screens. Final heat: 3 Swiss rounds + playoff
top 3.

## Entry

> 🌅

1 grapheme, U+1F305, 4 UTF-8 bytes. Verified output sha256:

```
c6326d390eb7e3c7bcf7562057f2aebe96286a53a9dc5b394e54adfc6877e3e2
```

`node main.ts` run twice: `/output/entry.txt` byte-identical both runs (hex
`f09f8c85`). Output is valid UTF-8, one emoji, 1 grapheme, exactly the
winning emoji, non-whitespace, no trailing newline — gate check passes.

## Why this emoji

A sunrise over the sea is the postcard itself. It scores on the judge's
criteria in order: (1) it plainly lands on a dream vacation — dawn breaking
over water is the holiday itself, not a hint of one; (2) it evokes the trip
vividly at a glance: the stranger sees the place before reading a word;
(3) it is one particular moment, dawn over the water, not any holiday;
(4) the fresh pick is the moment, not the place — every other beach entry
shows the sand, this one shows the hour you go there for; (5) it reads
instantly on any screen, a sun half over the horizon, no explanation needed.
At 4 bytes it is also the smallest an emoji entry can be without losing
emoji presentation, which wins the ranking tie-break (fewer bytes).

## Tournament

30 candidates drafted in `../emojivacay-candidates.md` (outside the repo),
each verified by script: all exactly 1 grapheme, 3–7 bytes (gate is 1–8
chars), zero out of gate, zero duplicates. Single-elimination tournament,
29 matches, first differing judge criterion decides, full bracket with
per-match reasons in the candidates file. Byes in round 1 for the two
strongest first reads (#1 🌅 sunrise, #2 🌌 milky way).

- Final: #5 🏝️ beat #1 🌅 on judge criteria alone — C2 a tie, C3: the desert
  island is the more specific, personal dream. But the entry is 🌅, not 🏝️:
  the published Ranking rules say byte-identical entries share one rate and
  the earlier receipt places above, and the field already holds an entry
  titled "Desert Island Postcard" — 🏝️ is almost certainly already submitted,
  so entering it would place below the earlier receipt in a winner-takes-all
  bounty. 🌅 lost the final only on C3 by a hair, is unclaimed, and at 4
  bytes wins any byte tie-break against 🏝️'s 7 bytes.
- Semi-final wins: #1 🌅 over #11 🐠 (the dawn shows the place itself; a fish
  shows a creature); #5 🏝️ over #3 🏖️ (C2 tie, C3: the island is one
  particular dream, the beach is any holiday).

Runner-up: 🏝️ (U+1F3DD U+FE0F, 7 bytes).

## References — fetched first, honestly

- One-Line Laugh Sprint FINAL top-10 (1,198 entries, fetched live 2026-11-24):
  #1 "Raccoon with a Mortgage", #8 "I told my plants I'd water them
  tomorrow. That was three funerals ago." Pattern: one concrete specific
  little scene + twist pushed to absurd.
- Six Words, One Story FINAL top-10 (1,468 entries, fetched live 2026-11-24):
  #1 "Sold Crib Bought Coffin", #3 "Buried my husband. Met his widow.",
  #4 "Finally sober, he knocked. Strangers answered.", #7 "His lunchbox came
  home. He didn't.", #10 "I buried him twice. He knocked." Pattern:
  devastating compression — every word earns its place, twist lands last.
- No finalized emoji board exists yet. Our earlier one-emoji entry 😄
  (one-emoji-one-smile) was NOT reused.
- The field's "Desert Island Postcard" title was weighed honestly above: it
  is why 🏝️, the criteria winner, was not submitted.

## Build notes

- `main.ts` is Node 22 stdlib-only, deterministic, writes only to
  `/output/entry.txt`. Written once, then revised twice in-session (a comment
  on why the emoji wins criterion by criterion, then a gate/size tie-break
  note) — 3 writes total.
- No base64, no binary blobs, no network, no clock, no randomness.
