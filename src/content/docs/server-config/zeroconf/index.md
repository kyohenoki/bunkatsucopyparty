---
number: 2
lang: en
title: zeroconf
description: announce enabled services on the LAN
date: 2025/10/18 1:53
update: none
---

announce enabled services on the LAN ([pic](https://user-images.githubusercontent.com/241032/215344737-0eae8d98-9496-4256-9aa8-cd2f6971810d.png)) -- `-z` enables both [mdns](#mdns) and [ssdp](#ssdp)

- `--z-on` / `--z-off` limits the feature to certain networks

config file example:

```yaml
[global]
  z      # enable all zeroconf features (mdns, ssdp)
  zm     # only enables mdns (does nothing since we already have z)
  z-on: 192.168.0.0/16, 10.1.2.0/24  # restrict to certain subnets
```
