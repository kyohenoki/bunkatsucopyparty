---
number: 4
lang: en
title: ssdp
description: windows-explorer announcer
date: 2025/10/18 1:58
update: none
---

windows-explorer announcer

uses [ssdp](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol) to make copyparty appear in the windows file explorer on all machines on the LAN

doubleclicking the icon opens the "connect" page which explains how to mount copyparty as a local filesystem

if copyparty does not appear in windows explorer, use `--zsv` to see why:

- maybe the discovery multicast was sent from an IP which does not intersect with the server subnets
