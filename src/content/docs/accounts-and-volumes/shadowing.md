---
number: 12
title: shadowing
description: shadowing
date: 2025/10/18 22:56
update: none
---

hiding specific subfolders by mounting another volume on top of them

for example `-v /mnt::r -v /var/empty:web/certs:r` mounts the server folder `/mnt` as the webroot, but another volume is mounted at `/web/certs` -- so visitors can only see the contents of `/mnt` and `/mnt/web` (at URLs `/` and `/web`), but not `/mnt/web/certs` because URL `/web/certs` is mapped to `/var/empty`

the example config file right above this section may explain this better; the first volume `/` is mapped to `/srv` which means http://127.0.0.1:3923/music would try to read `/srv/music` on the server filesystem, but since there's another volume at `/music` mapped to `/mnt/music` then it'll go to `/mnt/music` instead

> ℹ️ this also works for single files, because files can also be volumes
