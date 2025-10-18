---
number: 28
lang: en
title: rss feeds
description: monitor a folder with your RSS reader
date: 2025/10/18 23:52
update: none
---

monitor a folder with your RSS reader , optionally recursive

must be enabled per-volume with volflag `rss` or globally with `--rss`

the feed includes itunes metadata for use with podcast readers such as [AntennaPod](https://antennapod.org/)

a feed example: https://cd.ocv.me/a/d2/d22/?rss&fext=mp3

url parameters:

- `pw=hunter2` for password auth
  - if you enabled `--usernames` then do `pw=username:password` instead
- `nopw` disables embedding the password (if provided) into item-URLs in the feed
- `nopw=a` disables mentioning the password anywhere at all in the feed; may break some readers
- `recursive` to also include subfolders
- `title=foo` changes the feed title (default: folder name)
- `fext=mp3,opus` only include mp3 and opus files (default: all)
- `nf=30` only show the first 30 results (default: 250)
- `sort=m` sort by mtime (file last-modified), newest first (default)
  - `u` = upload-time; NOTE: non-uploaded files have upload-time `0`
  - `n` = filename
  - `a` = filesize
  - uppercase = reverse-sort; `M` = oldest file first
