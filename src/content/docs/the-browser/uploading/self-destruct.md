---
number: 22
title: self-destruct
description: uploads can be given a lifetime
date: 2025/10/18 23:26
update: none
---

uploads can be given a lifetime, after which they expire / self-destruct

the feature must be enabled per-volume with the `lifetime` [upload rule](#upload-rules) which sets the upper limit for how long a file gets to stay on the server

clients can specify a shorter expiration time using the [up2k ui](#uploading) -- the relevant options become visible upon navigating into a folder with `lifetimes` enabled -- or by using the `life` [upload modifier](./docs/devnotes.md#write)

specifying a custom expiration time client-side will affect the timespan in which unposts are permitted, so keep an eye on the estimates in the up2k ui
