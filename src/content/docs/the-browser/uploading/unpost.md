---
number: 21
lang: en
title: unpost
description: undo/delete accidental uploads
date: 2025/10/18 23:24
update: none
---

undo/delete accidental uploads using the `[🧯]` tab in the UI

![copyparty-unpost-fs8](/src/content/images/129635368-3afa6634-c20f-418c-90dc-ec411f3b3897.png)

you can unpost even if you don't have regular move/delete access, however only for files uploaded within the past `--unpost` seconds (default 12 hours) and the server must be running with `-e2d`

config file example:

```yaml
[global]
  e2d            # enable up2k database (remember uploads)
  unpost: 43200  # 12 hours (default)
```
