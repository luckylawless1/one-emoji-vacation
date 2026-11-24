// One Emoji, One Dream Vacation — make.fun entry.
// Writes exactly one emoji to /output/entry.txt: 🏝 (U+1F3DD, desert island).
// The desert island is the dream-vacation postcard: a beach, a faraway place,
// and a whole trip in a single glance — no words needed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "🏝";

// Gate self-check (mirrors the sealed scorer): the file must be UTF-8 text
// of 1 to 8 characters, not only white space — and this entry is exactly one.
const codePoints = [...ENTRY];
if (codePoints.length !== 1 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be exactly one emoji, got ${JSON.stringify(ENTRY)}`);
}
if (Buffer.byteLength(ENTRY, "utf8") > 8) {
  throw new Error("entry exceeds the 8-character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file straight back and prove the write landed byte-identical,
// before any other builder sharing /output can touch it.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error(`round-trip mismatch: wrote ${JSON.stringify(ENTRY)}, read ${JSON.stringify(written)}`);
}
