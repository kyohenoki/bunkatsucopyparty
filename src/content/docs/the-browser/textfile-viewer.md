---
number: 36
lang: en
title: textfile viewer
description: with realtime streaming of logfiles and such
date: 2025/10/18 0:01
update: none
---

with realtime streaming of logfiles and such ([demo](https://a.ocv.me/pub/demo/logtail/)) , and terminal colors work too

click `-txt-` next to a textfile to open the viewer, which has the following toolbar buttons:

- `✏️ edit` opens the textfile editor
- `📡 follow` starts monitoring the file for changes, streaming new lines in realtime
  - similar to `tail -f`
  - [link directly](https://a.ocv.me/pub/demo/logtail/?doc=lipsum.txt&tail) to a file with tailing enabled by adding `&tail` to the textviewer URL
