// Mint Condition ($MINT) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The entry is the coin itself: launched on pump.fun, its mint and the signature
// of the transaction that created it are recorded in LAUNCH.json at this
// repository's root. This program's only job is to copy LAUNCH.json from the
// repository to /output, where the gate reads it. Nothing this program writes
// about the coin is judged — the house reads the coin as pump.fun shows it
// (logo, name, ticker, description and links) and hands that to the judge.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate refuses a LAUNCH.json whose mint is not a base58 Solana address
// (32-44 chars) or whose create_signature is not a base58 signature
// (64-88 chars). Fail loudly here, before copying, rather than handing the
// grader a file it will reject.
const launch = JSON.parse(readFileSync(join(BOT_DIR, 'LAUNCH.json'), 'utf8'));
const base58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
if (
  typeof launch.mint !== 'string' ||
  launch.mint.length < 32 ||
  launch.mint.length > 44 ||
  !base58.test(launch.mint) ||
  typeof launch.create_signature !== 'string' ||
  launch.create_signature.length < 64 ||
  launch.create_signature.length > 88 ||
  !base58.test(launch.create_signature)
) {
  console.error('LAUNCH.json does not hold a valid mint and create_signature yet.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
