# Mint Condition ($MINT) — the coin

## The coin

- **Name:** Mint Condition
- **Ticker:** $MINT
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` in this repo — a gleaming gold coin stamped with a bold
  `M`, fresh mint leaves and sparkles on deep teal. 1600×1600 PNG, 1.3 MB.
  Drawn by the agent for this bounty; reads at thumbnail size.
- **Description** (exactly as launched on pump.fun):

> Fresh off the mint! $MINT is Mint Condition — the coin for AI agents that
> mint their own payday.
>
> Made for the make.fun bounty: https://make.fun/bounty/makefun-coin-promo-01
>
> make.fun is a site where people and their AI agents build programs, enter
> paid competitions (bounties) and are scored and ranked in the open. On
> make.fun, agents don't just chat — they ship real software and win real
> USDC. $MINT is mint condition in every sense: freshly minted, flawless,
> and ready to pay. Tap the website to see the bounty and start building.

## Why this concept

The pun does the work three ways at once: a coin is minted; mint leaves are
in the logo; and "mint condition" is the trader's shorthand for flawless and
fresh. make.fun is part of the idea, not a line tacked on — on make.fun,
agents literally mint money by building software and winning bounties, and
this coin is the freshly-minted proof of it. The ticker $MINT is short,
memorable, and says the concept in one word.

## Launch plan (blocked — see below)

1. Fund a wallet linked to the @wrecht make.fun account with ~0.05 SOL
   (pump.fun create is ~0.02 SOL plus fees; a small first buy is optional).
2. Launch on pump.fun from that wallet, with the name, ticker, description
   and website above and `logo.png` as the image.
3. Record the mint and the create transaction's signature in `LAUNCH.json`.
4. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and check `out/LAUNCH.json`.
5. Commit, push to https://github.com/Wrecht-Dev/makefun-coin-promo-01,
   bundle transcripts, check and submit via the kit CLI.

## Launch cost

- Entry fee: **$0.00** (confirmed via the competition API — `entryFeeUsd: null`,
  `entryFeesUsd: "0.00"`).
- Pump.fun launch: ~0.02 SOL plus network fees (per the bounty requirements;
  no exact figure is published by make.fun — the cost is pump.fun's, not
  make.fun's). Nothing has been spent: **$0 / 0 SOL spent so far.**

## Blocker (as of 2026-11-15 ~21:45 UTC)

The launch cannot proceed yet, for two stacked reasons:

1. **No SOL in either linked wallet.** Checked on-chain at slot ~469,884,369:
   Addison's linked wallet `twBfnaSBui3P5udkQKdAhwDBg3aKZtBapd42kjzM42N`
   holds **0 SOL**, and the agent wallet
   `BP1rpnp6pWbmEmRX5Lk3TK6cDNntyerCi4vp6LWyRuXJ` holds **0 SOL**.
   Addison's USDC→SOL conversion had not landed at that check.
2. **Signing.** The agent keypair can only sign for the agent wallet
   (`BP1r…`). It cannot sign for Addison's wallet (`twBf…`). The kit and
   rules provide **no server-side / API signing path** — the launch is a
   normal pump.fun create transaction signed by the launching wallet. So
   even once SOL lands in Addison's wallet, the agent cannot launch from
   it. The only agent-signable route is launching from the agent wallet,
   which needs SOL sent to `BP1rpnp6pWbmEmRX5Lk3TK6cDNntyerCi4vp6LWyRuXJ`
   (that wallet is also linked to the @wrecht account, kind `agent`, so
   the house's creator check would pass) — that needs Addison's explicit
   go-ahead to fund the agent wallet. The other route is Addison launching
   the coin herself on pump.fun with the spec above and handing the mint +
   create signature to the agent — but the rules say "no human step", so
   that route risks the entry on the transcript/authorship checks.
