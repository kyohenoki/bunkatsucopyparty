---
number: 19
title: uploading
description: drag files/folders into the web-browser to upload
date: 2025/10/18 23:21
update: none
---

drag files/folders into the web-browser to upload

dragdrop is the recommended way, but you may also:

- select some files (not folders) in your file explorer and press CTRL-V inside the browser window
- use the [command-line uploader](https://github.com/9001/copyparty/tree/hovudstraum/bin#u2cpy)
- upload using [curl, sharex, ishare, ...](#client-examples)

when uploading files through dragdrop or CTRL-V, this initiates an upload using `up2k`; there are two browser-based uploaders available:

- `[🎈] bup`, the basic uploader, supports almost every browser since netscape 4.0
- `[🚀] up2k`, the good / fancy one

NB: you can undo/delete your own uploads with `[🧯]` [unpost](#unpost) (and this is also where you abort unfinished uploads, but you have to refresh the page first)

up2k has several advantages:

- you can drop folders into the browser (files are added recursively)
- files are processed in chunks, and each chunk is checksummed
  - uploads autoresume if they are interrupted by network issues
  - uploads resume if you reboot your browser or pc, just upload the same files again
  - server detects any corruption; the client reuploads affected chunks
  - the client doesn't upload anything that already exists on the server
  - no filesize limit, even when a proxy limits the request size (for example Cloudflare)
- much higher speeds than ftp/scp/tarpipe on some internet connections (mainly american ones) thanks to parallel connections
- the last-modified timestamp of the file is preserved

> it is perfectly safe to restart / upgrade copyparty while someone is uploading to it!  
> all known up2k clients will resume just fine 💪

see [up2k](./docs/devnotes.md#up2k) for details on how it works, or watch a [demo video](https://a.ocv.me/pub/demo/pics-vids/#gf-0f6f5c0d)

![copyparty-upload-fs8](/src/content/images/129635371-48fc54ca-fa91-48e3-9b1d-ba413e4b68cb.png)

**protip:** you can avoid scaring away users with [contrib/plugins/minimal-up2k.js](contrib/plugins/minimal-up2k.js) which makes it look [much simpler](https://user-images.githubusercontent.com/241032/118311195-dd6ca380-b4ef-11eb-86f3-75a3ff2e1332.png)

**protip:** if you enable `favicon` in the `[⚙️] settings` tab (by typing something into the textbox), the icon in the browser tab will indicate upload progress -- also, the `[🔔]` and/or `[🔊]` switches enable visible and/or audible notifications on upload completion

the up2k UI is the epitome of polished intuitive experiences:

- "parallel uploads" specifies how many chunks to upload at the same time
- `[🏃]` analysis of other files should continue while one is uploading
- `[🥔]` shows a simpler UI for faster uploads from slow devices
- `[🛡️]` decides when to overwrite existing files on the server
  - `🛡️` = never (generate a new filename instead)
  - `🕒` = overwrite if the server-file is older
  - `♻️` = always overwrite if the files are different
- `[🎲]` generate random filenames during upload
- `[🔎]` switch between upload and [file-search](#file-search) mode
  - ignore `[🔎]` if you add files by dragging them into the browser

and then there's the tabs below it,

- `[ok]` is the files which completed successfully
- `[ng]` is the ones that failed / got rejected (already exists, ...)
- `[done]` shows a combined list of `[ok]` and `[ng]`, chronological order
- `[busy]` files which are currently hashing, pending-upload, or uploading
  - plus up to 3 entries each from `[done]` and `[que]` for context
- `[que]` is all the files that are still queued

note that since up2k has to read each file twice, `[🎈] bup` can _theoretically_ be up to 2x faster in some extreme cases (files bigger than your ram, combined with an internet connection faster than the read-speed of your HDD, or if you're uploading from a cuo2duo)

if you are resuming a massive upload and want to skip hashing the files which already finished, you can enable `turbo` in the `[⚙️] config` tab, but please read the tooltip on that button

if the server is behind a proxy which imposes a request-size limit, you can configure up2k to sneak below the limit with server-option `--u2sz` (the default is 96 MiB to support Cloudflare)

if you want to replace existing files on the server with new uploads by default, run with `--u2ow 2` (only works if users have the delete-permission, and can still be disabled with `🛡️` in the UI)
