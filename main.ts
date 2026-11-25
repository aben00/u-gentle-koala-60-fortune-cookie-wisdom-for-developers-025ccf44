// Fortune Cookie Wisdom for Developers — make.fun entry.
//
// Writes exactly one original fortune-cookie line for a software
// developer to /output/entry.txt, deterministically: the same text on
// every run, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "Your future self will thank you for the comment you are too tired to write tonight.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: a valid entry is UTF-8 text of 1 to 120 characters.
  if (FORTUNE.length === 0 || FORTUNE.length > 120) {
    throw new Error(`Fortune is ${FORTUNE.length} characters; must be 1-120.`);
  }
  // One line only: no newline inside, none appended.
  if (/\n/.test(FORTUNE)) {
    throw new Error("Fortune must be a single line.");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, FORTUNE, "utf8");
  console.log(`Wrote ${FORTUNE.length} characters to ${OUT_PATH}`);
}

main();
