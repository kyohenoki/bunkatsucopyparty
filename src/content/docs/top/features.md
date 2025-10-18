---
number: 3
title: features
description: copyparty の機能
date: 2025/10/18 22:33
update: none
---

also see [comparison to similar software](./docs/versus.md)

- backend stuff
  - ☑ IPv6 + unix-sockets
  - ☑ [multiprocessing](#performance) (actual multithreading)
  - ☑ volumes (mountpoints)
  - ☑ [accounts](#accounts-and-volumes)
  - ☑ [ftp server](#ftp-server)
  - ☑ [tftp server](#tftp-server)
  - ☑ [webdav server](#webdav-server)
  - ☑ [smb/cifs server](#smb-server)
  - ☑ [qr-code](#qr-code) for quick access
  - ☑ [upnp / zeroconf / mdns / ssdp](#zeroconf)
  - ☑ [event hooks](#event-hooks) / script runner
  - ☑ [reverse-proxy support](https://github.com/9001/copyparty#reverse-proxy)
  - ☑ cross-platform (Windows, Linux, Macos, Android, iOS, FreeBSD, arm32/arm64, ppc64le, s390x, risc-v/riscv64)
- upload
  - ☑ basic: plain multipart, ie6 support
  - ☑ [up2k](#uploading): js, resumable, multithreaded
    - **no filesize limit!** even on Cloudflare
  - ☑ stash: simple PUT filedropper
  - ☑ filename randomizer
  - ☑ write-only folders
  - ☑ [unpost](#unpost): undo/delete accidental uploads
  - ☑ [self-destruct](#self-destruct) (specified server-side or client-side)
  - ☑ [race the beam](#race-the-beam) (almost like peer-to-peer)
  - ☑ symlink/discard duplicates (content-matching)
- download
  - ☑ single files in browser
  - ☑ [folders as zip / tar files](#zip-downloads)
  - ☑ [FUSE client](https://github.com/9001/copyparty/tree/hovudstraum/bin#partyfusepy) (read-only)
- browser
  - ☑ [navpane](#navpane) (directory tree sidebar)
  - ☑ file manager (cut/paste, delete, [batch-rename](#batch-rename))
  - ☑ audio player (with [OS media controls](https://user-images.githubusercontent.com/241032/215347492-b4250797-6c90-4e09-9a4c-721edf2fb15c.png) and opus/mp3 transcoding)
    - ☑ play video files as audio (converted on server)
    - ☑ create and play [m3u8 playlists](#playlists)
  - ☑ image gallery with webm player
  - ☑ [textfile browser](#textfile-viewer) with syntax highlighting
    - ☑ realtime streaming of growing files (logfiles and such)
  - ☑ [thumbnails](#thumbnails)
    - ☑ ...of images using Pillow, pyvips, or FFmpeg
    - ☑ ...of RAW images using rawpy
    - ☑ ...of videos using FFmpeg
    - ☑ ...of audio (spectrograms) using FFmpeg
    - ☑ cache eviction (max-age; maybe max-size eventually)
  - ☑ multilingual UI (english, norwegian, chinese, [add your own](./docs/rice/#translations)))
  - ☑ SPA (browse while uploading)
- server indexing
  - ☑ [locate files by contents](#file-search)
  - ☑ search by name/path/date/size
  - ☑ [search by ID3-tags etc.](#searching)
- client support
  - ☑ [folder sync](#folder-sync) (one-way only; full sync will never be supported)
  - ☑ [curl-friendly](https://user-images.githubusercontent.com/241032/215322619-ea5fd606-3654-40ad-94ee-2bc058647bb2.png)
  - ☑ [opengraph](#opengraph) (discord embeds)
- markdown
  - ☑ [viewer](#markdown-viewer)
  - ☑ editor (sure why not)
  - ☑ [variables](#markdown-vars)

PS: something missing? post any crazy ideas you've got as a [feature request](https://github.com/9001/copyparty/issues/new?assignees=9001&labels=enhancement&template=feature_request.md) or [discussion](https://github.com/9001/copyparty/discussions/new?category=ideas) 🤙
