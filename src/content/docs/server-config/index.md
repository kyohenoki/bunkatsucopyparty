---
number: 15
lang: en
title: server config
description: サーバーの設定
date: 2025/10/18 1:46
update: none
---

- [server config](/docs/server-config/server-config) - using arguments or config files, or a mix of both
  - [zeroconf](/docs/server-config/zeroconf) - announce enabled services on the LAN ([pic](https://user-images.githubusercontent.com/241032/215344737-0eae8d98-9496-4256-9aa8-cd2f6971810d.png))
    - [mdns](/docs/server-config/zeroconf/mdns) - LAN domain-name and feature announcer
    - [ssdp](/docs/server-config/zeroconf/ssdp) - windows-explorer announcer
  - [qr-code](/docs/server-config/qr-code) - print a qr-code [(screenshot)](https://user-images.githubusercontent.com/241032/194728533-6f00849b-c6ac-43c6-9359-83e454d11e00.png) for quick access
  - [ftp server](#ftp-server) - an FTP server can be started using `--ftp 3921`
  - [webdav server](#webdav-server) - with read-write support
    - [connecting to webdav from windows](#connecting-to-webdav-from-windows) - using the GUI
  - [tftp server](#tftp-server) - a TFTP server (read/write) can be started using `--tftp 3969`
  - [smb server](#smb-server) - unsafe, slow, not recommended for wan
  - [browser ux](#browser-ux) - tweaking the ui
  - [opengraph](#opengraph) - discord and social-media embeds
  - [file deduplication](#file-deduplication) - enable symlink-based upload deduplication
  - [file indexing](#file-indexing) - enable music search, upload-undo, and better dedup
    - [exclude-patterns](#exclude-patterns) - to save some time
    - [filesystem guards](#filesystem-guards) - avoid traversing into other filesystems
    - [periodic rescan](#periodic-rescan) - filesystem monitoring
  - [upload rules](#upload-rules) - set upload rules using volflags
  - [compress uploads](#compress-uploads) - files can be autocompressed on upload
  - [chmod and chown](#chmod-and-chown) - per-volume filesystem-permissions and ownership
  - [other flags](#other-flags)
  - [database location](#database-location) - in-volume (`.hist/up2k.db`, default) or somewhere else
  - [metadata from audio files](#metadata-from-audio-files) - set `-e2t` to index tags on upload
  - [file parser plugins](#file-parser-plugins) - provide custom parsers to index additional tags
  - [event hooks](#event-hooks) - trigger a program on uploads, renames etc ([examples](./bin/hooks/))
    - [zeromq](#zeromq) - event-hooks can send zeromq messages
    - [upload events](#upload-events) - the older, more powerful approach ([examples](./bin/mtag/))
  - [handlers](#handlers) - redefine behavior with plugins ([examples](./bin/handlers/))
  - [ip auth](#ip-auth) - autologin based on IP range (CIDR)
    - [restrict to ip](#restrict-to-ip) - limit a user to certain IP ranges (CIDR)
  - [identity providers](#identity-providers) - replace copyparty passwords with oauth and such
    - [generic header auth](#generic-header-auth) - other ways to auth by header
  - [user-changeable passwords](#user-changeable-passwords) - if permitted, users can change their own passwords
  - [using the cloud as storage](#using-the-cloud-as-storage) - connecting to an aws s3 bucket and similar
  - [hiding from google](#hiding-from-google) - tell search engines you don't wanna be indexed
  - [themes](#themes)
  - [complete examples](#complete-examples)
  - [listen on port 80 and 443](#listen-on-port-80-and-443) - become a _real_ webserver
  - [reverse-proxy](#reverse-proxy) - running copyparty next to other websites
    - [real-ip](#real-ip) - teaching copyparty how to see client IPs
    - [reverse-proxy performance](#reverse-proxy-performance)
  - [permanent cloudflare tunnel](#permanent-cloudflare-tunnel) - if you have a domain and want to get your copyparty online real quick
  - [prometheus](#prometheus) - metrics/stats can be enabled
  - [other extremely specific features](#other-extremely-specific-features) - you'll never find a use for these
    - [custom mimetypes](#custom-mimetypes) - change the association of a file extension
    - [GDPR compliance](#GDPR-compliance) - imagine using copyparty professionally...
    - [feature chickenbits](#feature-chickenbits) - buggy feature? rip it out
    - [feature beefybits](#feature-beefybits) - force-enable features with known issues on your OS/env
