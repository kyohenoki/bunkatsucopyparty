---
number: 1
lang: en
title: server config
description: サusing arguments or config files, or a mix of both
date: 2025/10/18 1:51
update: none
---

using arguments or config files, or a mix of both:

- config files (`-c some.conf`) can set additional commandline arguments; see [./docs/example.conf](docs/example.conf) and [./docs/example2.conf](docs/example2.conf)
- `kill -s USR1` (same as `systemctl reload copyparty`) to reload accounts and volumes from config files without restarting
  - or click the `[reload cfg]` button in the control-panel if the user has `a`/admin in any volume
  - changes to the `[global]` config section requires a restart to take effect

**NB:** as humongous as this readme is, there is also a lot of undocumented features. Run copyparty with `--help` to see all available global options; all of those can be used in the `[global]` section of config files, and everything listed in `--help-flags` can be used in volumes as volflags.

- if running in docker/podman, try this: `docker run --rm -it copyparty/ac --help`
- or see this: https://ocv.me/copyparty/helptext.html
- or if you prefer plaintext, https://ocv.me/copyparty/helptext.txt
