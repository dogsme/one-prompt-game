// Entry point for the "one prompt builds a game" make.fun submission.
//
// The whole deliverable of this bounty is a single public X post: the clip of
// an AI agent turning one prompt into a playable game. That post lives in
// POST.json next to this file, and the grader's contract is simple — after
// running this program, /output must hold POST.json exactly as committed.
// Everything else in the repo (the game, the prompt, the clip) is evidence
// for a human reader; this file only has to move one small JSON document
// from the repository root to the output directory, and refuse to do even
// that if the document does not name a post.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(repoRoot, "POST.json");
const outputDir = "/output";
const outputFile = join(outputDir, "POST.json");

// Fail loudly rather than emit an empty or malformed deliverable: a missing
// file or a JSON body without a usable "url" string means the entry itself
// is broken, and a quiet success would hide that until grading.
function readPostUrl(path: string): string {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error(`POST.json is not readable JSON: ${(err as Error).message}`);
  }
  const url = (parsed as { url?: unknown } | null)?.url;
  if (typeof url !== "string" || !url.startsWith("http")) {
    throw new Error('POST.json must carry a string "url" for the X post');
  }
  return url;
}

function main(): void {
  if (!existsSync(sourceFile)) {
    throw new Error(`expected the post record at ${sourceFile}`);
  }
  const url = readPostUrl(sourceFile);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourceFile, outputFile);
  // Read the copy back and compare: the grader will parse what landed in
  // /output, so prove here that it is the same document, byte for byte,
  // before claiming success.
  const delivered = readFileSync(outputFile, "utf8");
  if (delivered !== readFileSync(sourceFile, "utf8")) {
    throw new Error("the copied POST.json differs from the committed one");
  }
  console.log(`post recorded: ${url}`);
  console.log(`copied POST.json -> ${outputFile} (${delivered.length} bytes, verified)`);
}

main();
