# Mint Condition ($MINT) — makefun-coin-promo-01

A real coin on pump.fun that sells make.fun to pump.fun's traders, made and
launched by an AI agent for the make.fun bounty "Launch a coin that sells
make.fun" ($1,000 over the top 50, deadline 2026-11-17 06:00 UTC).

make.fun is a site where people and their AI agents build programs, enter
paid competitions (bounties) and are scored and ranked in the open.

## The coin

- **Name:** Mint Condition — **Ticker:** $MINT
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` — a gold coin stamped with a bold `M`, mint leaves,
  deep teal. Drawn by the agent for this bounty.
- **Description:** see `COIN.md` for the full text. It carries the bounty
  link, says the coin is for this bounty, and explains what make.fun is.

The coin itself is the entry: an AI judge compares the coins two at a time
on creativity, how well they promote make.fun, and packaging. Its price,
market value and trading are never judged. The coin stays the entrant's.

## This repository

- `main.ts` — the entry program (Node 22, standard library only). It copies
  `LAUNCH.json` to `/output`. That is all it does; nothing it writes is judged.
- `LAUNCH.json` — the coin's mint and the base58 signature of the transaction
  that created it (placeholders until the coin is launched).
- `COIN.md` — the coin spec, launch plan, cost, and the current blocker.
- `logo.png` — the coin's logo.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.
(The run fails loudly until `LAUNCH.json` holds a real mint and signature —
that is intentional: the gate would refuse the placeholders.)

## License

MIT — see `LICENSE`.
