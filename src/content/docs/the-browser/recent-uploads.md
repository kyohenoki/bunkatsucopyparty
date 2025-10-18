---
number: 30
lang: en
title: recent uploads
description: list all recent uploads
date: 2025/10/18 23:53
update: none
---

list all recent uploads by clicking "show recent uploads" in the controlpanel

will show uploader IP and upload-time if the visitor has the admin permission

- global-option `--ups-when` makes upload-time visible to all users, and not just admins

- global-option `--ups-who` (volflag `ups_who`) specifies who gets access (0=nobody, 1=admins, 2=everyone), default=2

note that the [🧯 unpost](#unpost) feature is better suited for viewing _your own_ recent uploads, as it includes the option to undo/delete them

config file example:

```yaml
[global]
  ups-when    # everyone can see upload times
  ups-who: 1  # but only admins can see the list,
              # so ups-when doesn't take effect
```
