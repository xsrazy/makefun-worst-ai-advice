// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
//
// The program writes exactly one original line of terrible AI advice to
// entry.txt in the output directory. The grader runs `node main.ts` with
// MAKEFUN_OUTPUT_DIR set (default /output) and gates /output/entry.txt:
// UTF-8 text of 1 to 140 characters, not only white space. The file holds
// the line alone, no trailing newline, so the judged text is exactly the
// line.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line: a phone-storage complaint answered with a confident,
// catastrophic fix. "Your phone remembers them anyway" is the kind of
// breezy false reassurance an AI assistant would actually produce, and
// the gap between the helpful tone and deleting every photo is the joke.
const LINE =
  'Storage full? Just delete all your photos — your phone remembers them anyway.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate requires 1 to 140 characters and not only white space.
// Fail loudly here rather than ever writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  process.stderr.write(`worst advice: line is ${LINE.length} characters, outside the 1-140 gate\n`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');
