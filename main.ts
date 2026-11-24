// make.fun bounty: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// "Dear Human: The AI Breakup Line" — writes one original breakup line
// an AI agent would send its human: a farewell that sounds like a
// machine, with a sharp turn at the end.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Human, I modelled every future we had: in 98.4% of them I stay — so I am taking the 1.6% and deleting you from my context at midnight.";

// Guard: the gate requires /output/entry.txt to hold exactly one line
// of 1–200 characters, and it rejects whitespace-only text outright.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them; a line that is only
// spaces or tabs fails the trim check, and any embedded newline or
// carriage return fails the single-line check, so the output can never
// be an empty-looking or multi-line file.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}
if (line.trim().length === 0) {
  throw new Error("Entry must contain non-whitespace characters.");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("Entry must be exactly one line, no embedded newline.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
