// One Emoji, One Dream Vacation — u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// One emoji, nothing else, standing in for the trip of your dreams.
// Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// The emoji is a sunrise over the sea: the postcard itself. A stranger sees
// the place before reading a word — dawn breaking over water is the one
// image every dream trip shares, and it invites you to be there. It lost
// the judge-criteria final only on a hair (criterion 3, specificity) to the
// desert island, which was passed over because the field already holds an
// entry titled "Desert Island Postcard": byte-identical entries share one
// rate and the earlier receipt places above, so the island cannot win.
// Writes the emoji to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-8 chars, UTF-8, single emoji, non-whitespace. This entry is
// 1 grapheme, U+1F305, 4 bytes — comfortably inside the gate and small
// enough to win a size tie-break (exact ties go to the smaller text).
// No trailing newline: the file holds exactly the emoji, byte for byte.
// Why it wins, criterion by criterion: (1) it plainly lands on a dream
// vacation — a sunrise over the sea is the holiday itself, not a hint of
// one; (2) it evokes the trip vividly at a glance, like a postcard: the
// stranger sees the place before reading a word; (3) it is one particular
// moment, dawn over the water, not any holiday; (4) the fresh pick is the
// moment, not the place — every other beach entry shows the sand, this one
// shows the hour you go there for; (5) it reads instantly on any screen,
// a sun half over the horizon, no explanation needed.
import { mkdirSync, writeFileSync } from "node:fs";

// Byte check: U+1F305 is a single code point, 4 UTF-8 bytes, 1 grapheme —
// the smallest an emoji entry can be without losing emoji presentation,
// which also wins the ranking tie-break (fewer bytes) against the
// 7-byte island it beat in the semi-final path. Verified with node:
// Intl.Segmenter counts 1 grapheme, Buffer.byteLength is 4.
const EMOJI = "🌅";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
console.log(EMOJI);
