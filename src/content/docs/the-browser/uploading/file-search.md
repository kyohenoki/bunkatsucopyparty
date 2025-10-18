---
number: 20
lang: en
title: file-search
description: dropping files into the browser also lets you see if they exist on the server
date: 2025/10/18 23:23
update: none
---

dropping files into the browser also lets you see if they exist on the server

![copyparty-fsearch-fs8](/src/content/images/129635361-c79286f0-b8f1-440e-aaf4-6e929428fac9.png)

when you drag/drop files into the browser, you will see two dropzones: `Upload` and `Search`

> on a phone? toggle the `[🔎]` switch green before tapping the big yellow Search button to select your files

the files will be hashed on the client-side, and each hash is sent to the server, which checks if that file exists somewhere

files go into `[ok]` if they exist (and you get a link to where it is), otherwise they land in `[ng]`

- the main reason filesearch is combined with the uploader is cause the code was too spaghetti to separate it out somewhere else, this is no longer the case but now i've warmed up to the idea too much

if you have a "wark" (file-identifier/checksum) then you can also search for that in the [🔎] tab by putting `w = kFpDiztbZc8Z1Lzi` in the `raw` field
