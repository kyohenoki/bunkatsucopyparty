---
number: 29
lang: en
title: opds feeds
description: browse and download files from your e-book reader
date: 2025/10/18 23:52
update: none
---

browse and download files from your e-book reader

enabled with the `opds` volflag or `--opds` global option

add `?opds` to the end of the url you would like to browse, then input that in your opds client.
for example: `https://copyparty.example/books/?opds`.

to log in with a password, enter it into either of the username or password fields in your client.

- if you've enabled `--usernames`, then you need to enter both username and password .

note: some clients (e.g. Moon+ Reader) will not send the password when downloading cover images, which will
cause your ip to be banned by copyparty. to work around this, you can grant the [`g` permission](#accounts-and-volumes)
to unauthenticated requests and enable [filekeys](#filekeys) to prevent guessing filenames. for example:
`-vbooks:books:r,ed:g:c,fk,opds`

by default, not all file types will be listed in opds feeds. to change this, add the extension to
`--opds-exts` (volflag: `opds_exts`), or empty the list to list everything
