---
number: 10
lang: en
title: faq
description: faq
date: 2025/10/18 22:54
update: none
---

"frequently" asked questions

- CopyParty?
  - nope! the name is either copyparty (all-lowercase) or Copyparty -- it's [one word](https://en.wiktionary.org/wiki/copyparty) after all :>

- can I change the 🌲 spinning pine-tree loading animation?
  - [yeah...](https://github.com/9001/copyparty/tree/hovudstraum/docs/rice#boring-loader-spinner) :-(

- is it possible to block read-access to folders unless you know the exact URL for a particular file inside?
  - yes, using the [`g` permission](#accounts-and-volumes), see the examples there
  - you can also do this with linux filesystem permissions; `chmod 111 music` will make it possible to access files and folders inside the `music` folder but not list the immediate contents -- also works with other software, not just copyparty

- can I link someone to a password-protected volume/file by including the password in the URL?
  - yes, by adding `?pw=hunter2` to the end; replace `?` with `&` if there are parameters in the URL already, meaning it contains a `?` near the end
    - if you have enabled `--usernames` then do `?pw=username:password` instead

- how do I stop `.hist` folders from appearing everywhere on my HDD?
  - by default, a `.hist` folder is created inside each volume for the filesystem index, thumbnails, audio transcodes, and markdown document history. Use the `--hist` global-option or the `hist` volflag to move it somewhere else; see [database location](#database-location)

- can I make copyparty download a file to my server if I give it a URL?
  - yes, using [hooks](https://github.com/9001/copyparty/blob/hovudstraum/bin/hooks/wget.py)

- firefox refuses to connect over https, saying "Secure Connection Failed" or "SEC_ERROR_BAD_SIGNATURE", but the usual button to "Accept the Risk and Continue" is not shown
  - firefox has corrupted its certstore; fix this by exiting firefox, then find and delete the file named `cert9.db` somewhere in your firefox profile folder

- the server keeps saying `thank you for playing` when I try to access the website
  - you've gotten banned for malicious traffic! if this happens by mistake, and you're running a reverse-proxy and/or something like cloudflare, see [real-ip](#real-ip) on how to fix this

- copyparty seems to think I am using http, even though the URL is https
  - your reverse-proxy is not sending the `X-Forwarded-Proto: https` header; this could be because your reverse-proxy itself is confused. Ensure that none of the intermediates (such as cloudflare) are terminating https before the traffic hits your entrypoint

- thumbnails are broken (you get a colorful square which says the filetype instead)
  - you need to install `FFmpeg` or `Pillow`; see [thumbnails](#thumbnails)

- thumbnails are broken (some images appear, but other files just get a blank box, and/or the broken-image placeholder)
  - probably due to a reverse-proxy messing with the request URLs and stripping the query parameters (`?th=w`), so check your URL rewrite rules
  - could also be due to incorrect caching settings in reverse-proxies and/or CDNs, so make sure that nothing is set to ignore the query string
  - could also be due to misbehaving privacy-related browser extensions, so try to disable those

- i want to learn python and/or programming and am considering looking at the copyparty source code in that occasion
  - ```bash
     _|  _      __   _  _|_
    (_| (_)     | | (_)  |_
    ```
