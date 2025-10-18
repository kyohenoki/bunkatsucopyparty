---
number: 9
title: breaking changes
description: breaking changes
date: 2025/10/18 22:53
update: none
---

upgrade notes

- `1.9.16` (2023-11-04):
  - `--stats`/prometheus: `cpp_bans` renamed to `cpp_active_bans`, and that + `cpp_uptime` are gauges
- `1.6.0` (2023-01-29):
  - http-api: delete/move is now `POST` instead of `GET`
  - everything other than `GET` and `HEAD` must pass [cors validation](#cors)
- `1.5.0` (2022-12-03): [new chunksize formula](https://github.com/9001/copyparty/commit/54e1c8d261df) for files larger than 128 GiB
  - **users:** upgrade to the latest [cli uploader](https://github.com/9001/copyparty/blob/hovudstraum/bin/u2c.py) if you use that
  - **devs:** update third-party up2k clients (if those even exist)
