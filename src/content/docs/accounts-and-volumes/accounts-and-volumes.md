---
number: 11
lang: en
title: accounts and volumes
description: accounts and volumes
date: 2025/10/18 22:55
update: none
---

per-folder, per-user permissions - if your setup is getting complex, consider making a [config file](./docs/example.conf) instead of using arguments

- much easier to manage, and you can modify the config at runtime with `systemctl reload copyparty` or more conveniently using the `[reload cfg]` button in the control-panel (if the user has `a`/admin in any volume)
  - changes to the `[global]` config section requires a restart to take effect

a quick summary can be seen using `--help-accounts`

configuring accounts/volumes with arguments:

- `-a usr:pwd` adds account `usr` with password `pwd`
- `-v .::r` adds current-folder `.` as the webroot, `r`eadable by anyone
  - the syntax is `-v src:dst:perm:perm:...` so local-path, url-path, and one or more permissions to set
  - granting the same permissions to multiple accounts:  
    `-v .::r,usr1,usr2:rw,usr3,usr4` = usr1/2 read-only, 3/4 read-write

permissions:

- `r` (read): browse folder contents, download files, download as zip/tar, see filekeys/dirkeys
- `w` (write): upload files, move/copy files _into_ this folder
- `m` (move): move files/folders _from_ this folder
- `d` (delete): delete files/folders
- `.` (dots): user can ask to show dotfiles in directory listings
- `g` (get): only download files, cannot see folder contents or zip/tar
- `G` (upget): same as `g` except uploaders get to see their own [filekeys](#filekeys) (see `fk` in examples below)
- `h` (html): same as `g` except folders return their index.html, and filekeys are not necessary for index.html
- `a` (admin): can see upload time, uploader IPs, config-reload
- `A` ("all"): same as `rwmda.` (read/write/move/delete/admin/dotfiles)

examples:

- add accounts named u1, u2, u3 with passwords p1, p2, p3: `-a u1:p1 -a u2:p2 -a u3:p3`
- make folder `/srv` the root of the filesystem, read-only by anyone: `-v /srv::r`
- make folder `/mnt/music` available at `/music`, read-only for u1 and u2, read-write for u3: `-v /mnt/music:music:r,u1,u2:rw,u3`
  - unauthorized users accessing the webroot can see that the `music` folder exists, but cannot open it
- make folder `/mnt/incoming` available at `/inc`, write-only for u1, read-move for u2: `-v /mnt/incoming:inc:w,u1:rm,u2`
  - unauthorized users accessing the webroot can see that the `inc` folder exists, but cannot open it
  - `u1` can open the `inc` folder, but cannot see the contents, only upload new files to it
  - `u2` can browse it and move files _from_ `/inc` into any folder where `u2` has write-access
- make folder `/mnt/ss` available at `/i`, read-write for u1, get-only for everyone else, and enable filekeys: `-v /mnt/ss:i:rw,u1:g:c,fk=4`
  - `c,fk=4` sets the `fk` ([filekey](#filekeys)) volflag to 4, meaning each file gets a 4-character accesskey
  - `u1` can upload files, browse the folder, and see the generated filekeys
  - other users cannot browse the folder, but can access the files if they have the full file URL with the filekey
  - replacing the `g` permission with `wg` would let anonymous users upload files, but not see the required filekey to access it
  - replacing the `g` permission with `wG` would let anonymous users upload files, receiving a working direct link in return

if you want to grant access to all users who are logged in, the group `acct` will always contain all known users, so for example `-v /mnt/music:music:r,@acct`

- to do the opposite, granting access to everyone who is NOT logged in. `*,-@acct` does the trick, for example `-v /srv/welcome:welcome:r,*,-@acct`
- single users can also be subtracted from a group: `@admins,-james`

anyone trying to bruteforce a password gets banned according to `--ban-pw`; default is 24h ban for 9 failed attempts in 1 hour

and if you want to use config files instead of commandline args (good!) then here's the same examples as a configfile; save it as `foobar.conf` and use it like this: `python copyparty-sfx.py -c foobar.conf`

- you can also `PRTY_CONFIG=foobar.conf python copyparty-sfx.py` (convenient in docker etc)

```yaml
[accounts]
  u1: p1  # create account "u1" with password "p1"
  u2: p2  #  (note that comments must have
  u3: p3  #   two spaces before the # sign)

[groups]
  g1: u1, u2  # create a group

[/]     # this URL will be mapped to...
  /srv  # ...this folder on the server filesystem
  accs:
    r: *  # read-only for everyone, no account necessary

[/music]       # create another volume at this URL,
  /mnt/music   # which is mapped to this folder
  accs:
    r: u1, u2  # only these accounts can read,
    r: @g1     # (exactly the same, just with a group instead)
    r: @acct   # (alternatively, ALL users who are logged in)
    rw: u3     # and only u3 can read-write

[/inc]
  /mnt/incoming
  accs:
    w: u1   # u1 can upload but not see/download any files,
    rm: u2  # u2 can browse + move files out of this volume

[/i]
  /mnt/ss
  accs:
    rw: u1  # u1 can read-write,
    g: *    # everyone can access files if they know the URL
  flags:
    fk: 4   # each file URL will have a 4-character password
```
