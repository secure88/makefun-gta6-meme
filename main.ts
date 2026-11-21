// gta6-meme-x-01 entrypoint for the grader's Node 22 sandbox.
// Standard library only: copy POST.json into the output directory and stop.
// No network, no clock, and no other files. Success prints nothing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDirectory = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const destinationDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postFileName = 'POST.json';

function describeFailure(err: unknown): string {
  if (!(err instanceof Error)) {
    return String(err);
  }
  const code =
    'code' in err && err.code !== undefined && err.code !== null
      ? String(err.code)
      : '';
  if (code.length > 0 && !err.message.startsWith(`${code}:`)) {
    return `${code}: ${err.message}`;
  }
  return err.message;
}

mkdirSync(destinationDirectory, { recursive: true });

try {
  copyFileSync(
    join(sourceDirectory, postFileName),
    join(destinationDirectory, postFileName),
  );
} catch (err) {
  console.error(
    `POST.json could not be copied from ${sourceDirectory}: ${describeFailure(err)}`,
  );
  process.exit(1);
}
