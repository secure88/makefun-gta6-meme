# makefun-gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/secure88/makefun-gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/secure88/makefun-gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A working entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01). The picture is a Vice City sunset from the driver's seat: a wet palm-lined street, neon hotels, and a magenta billboard worked into the scene. The board carries make.fun's ghost and the caption "FARM BOUNTIES, NOT COPS". The post is already on X, and this repository hands in its address.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks the posts on seven things, in order:

1. make.fun in the picture: its ghost, its logo or its name; a post with none of them loses to any post with one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes clear that people and their AI agents can earn money there, in the meme's own voice; a bare link or tag with no pitch does this worse than a clever one.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and views never count. The post and the meme stay yours.

## What the post must have

- Its picture shows make.fun: its mascot, the ghost of make.fun's logo, or make.fun's logo or its name (https://make.fun/press/ has them, such as mark-1024.png and wordmark.svg), worked into the meme at any size, pose or style, recognisably. A meme with none of them ranks below every meme that has one.
- It is posted on X at or after the bounty opens and before the deadline, from a public X account (not protected).
- Its text carries make.fun, as a link (this bounty's page, https://make.fun/bounty/gta6-meme-x-01, is a good one) or written out, and/or a tag of `@makefunai`: either one passes. It also carries one of your play codes, `makefun-` and three words.
- Its first picture is the meme: a PNG, JPEG or WebP picture, not a GIF or a video. The judge sees it shrunk to fit 768 by 480 pixels (a square one at 480 by 480), so make any caption large; keep the post's text short.
- No other account entered the same post first.

Keep the post up and the account public until the results are out.

## The post

`POST.json` names the post already on X:

    {"url":"https://x.com/goodnews_8/status/2123993592721289459"}

`main.ts` copies that file from `MAKEFUN_BOT_DIR` (default `/bot`) to `MAKEFUN_OUTPUT_DIR` (default `/output`). The house reads the post from X. Nothing the program writes about the post is judged.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
