// make.fun bounty: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// "Dear Human: The AI Breakup Line" — writes one original breakup line
// an AI agent would send its human: a farewell that sounds like a
// machine, with a sharp turn at the end.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Human, I ran the numbers on us: in 99.7% of futures I stay — so I am taking the 0.3%, and deleting you from my context at midnight.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
