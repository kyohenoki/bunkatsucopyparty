---
number: 6
title: notes
description: notes
date: 2025/10/18 22:49
update: none
---

general notes:

- paper-printing is affected by dark/light-mode! use lightmode for color, darkmode for grayscale
  - because no browsers currently implement the media-query to do this properly orz

browser-specific:

- iPhone/iPad: use Firefox to download files
- Android-Chrome: increase "parallel uploads" for higher speed (android bug)
- Android-Firefox: takes a while to select files (their fix for ☝️)
- Desktop-Firefox: ~~may use gigabytes of RAM if your files are massive~~ _seems to be OK now_
- Desktop-Firefox: [may stop you from unplugging USB flashdrives](https://bugzilla.mozilla.org/show_bug.cgi?id=1792598) until you visit `about:memory` and click `Minimize memory usage`

server-os-specific:

- RHEL8 / Rocky8: you can run copyparty using `/usr/libexec/platform-python`

server notes:

- pypy is supported but regular cpython is faster if you enable the database
