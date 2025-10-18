---
number: 3
lang: en
title: mdns
description: LAN domain-name and feature announcer
date: 2025/10/18 1:55
update: none
---

LAN domain-name and feature announcer

uses [multicast dns](https://en.wikipedia.org/wiki/Multicast_DNS) to give copyparty a domain which any machine on the LAN can use to access it

all enabled services ([webdav](#webdav-server), [ftp](#ftp-server), [smb](#smb-server)) will appear in mDNS-aware file managers (KDE, gnome, macOS, ...)

the domain will be `partybox.local` if the machine's hostname is `partybox` unless `--name` specifies something else

and the web-UI will be available at http://partybox.local:3923/

- if you want to get rid of the `:3923` so you can use http://partybox.local/ instead then see [listen on port 80 and 443](#listen-on-port-80-and-443)
