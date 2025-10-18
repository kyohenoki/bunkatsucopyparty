---
number: 13
lang: en
title: dotfiles
description: dotfiles
date: 2025/10/18 22:57
update: none
---

unix-style hidden files/folders by starting the name with a dot

anyone can access these if they know the name, but they normally don't appear in directory listings

a client can request to see dotfiles in directory listings if global option `-ed` is specified, or the volume has volflag `dots`, or the user has permission `.`

dotfiles do not appear in search results unless one of the above is true, **and** the global option / volflag `dotsrch` is set

> even if user has permission to see dotfiles, they are default-hidden unless `--see-dots` is set, and/or user has enabled the `dotfiles` option in the settings tab

config file example, where the same permission to see dotfiles is given in two different ways just for reference:

```yaml
[/foo]
  /srv/foo
  accs:
    r.: ed   # user "ed" has read-access + dot-access in this volume;
             # dotfiles are visible in listings, but not in searches
  flags:
    dotsrch  # dotfiles will now appear in search results too
    dots     # another way to let everyone see dotfiles in this vol
```
