---
number: 7
title: bugs
description: bugs
date: 2025/10/18 22:50
update: none
---

roughly sorted by chance of encounter

- general:
  - `--th-ff-jpg` may fix video thumbnails on some FFmpeg versions (macos, some linux)
  - `--th-ff-swr` may fix audio thumbnails on some FFmpeg versions
  - if the `up2k.db` (filesystem index) is on a samba-share or network disk, you'll get unpredictable behavior if the share is disconnected for a bit
    - use `--hist` or the `hist` volflag (`-v [...]:c,hist=/tmp/foo`) to place the db and thumbnails on a local disk instead
    - or, if you only want to move the db (and not the thumbnails), then use `--dbpath` or the `dbpath` volflag
  - all volumes must exist / be available on startup; up2k (mtp especially) gets funky otherwise
  - probably more, pls let me know

- python 3.4 and older (including 2.7):
  - many rare and exciting edge-cases because [python didn't handle EINTR yet](https://peps.python.org/pep-0475/)
    - downloads from copyparty may suddenly fail, but uploads _should_ be fine

- python 2.7 on Windows:
  - cannot index non-ascii filenames with `-e2d`
  - cannot handle filenames with mojibake

if you have a new exciting bug to share, see [reporting bugs](#reporting-bugs)
