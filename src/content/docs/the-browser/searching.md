---
number: 40
title: searching
description: search by size, date, path/name, mp3-tags, ...
date: 2025/10/18 0:10
update: none
---

search by size, date, path/name, mp3-tags, ...

![copyparty-search-fs8](https://user-images.githubusercontent.com/241032/129635365-c0ff2a9f-0ee5-4fc3-8bb6-006033cf67b8.png)

when started with `-e2dsa` copyparty will scan/index all your files. This avoids duplicates on upload, and also makes the volumes searchable through the web-ui:

- make search queries by `size`/`date`/`directory-path`/`filename`, or...
- drag/drop a local file to see if the same contents exist somewhere on the server, see [file-search](#file-search)

path/name queries are space-separated, AND'ed together, and words are negated with a `-` prefix, so for example:

- path: `shibayan -bossa` finds all files where one of the folders contain `shibayan` but filters out any results where `bossa` exists somewhere in the path
- name: `demetori styx` gives you [good stuff](https://www.youtube.com/watch?v=zGh0g14ZJ8I&list=PL3A147BD151EE5218&index=9)

the `raw` field allows for more complex stuff such as `( tags like *nhato* or tags like *taishi* ) and ( not tags like *nhato* or not tags like *taishi* )` which finds all songs by either nhato or taishi, excluding collabs (terrible example, why would you do that)

for the above example to work, add the commandline argument `-e2ts` to also scan/index tags from music files, which brings us over to:
