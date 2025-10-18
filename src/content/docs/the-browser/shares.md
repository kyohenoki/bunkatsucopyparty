---
number: 26
lang: en
title: shares
description: share a file or folder by creating a temporary link
date: 2025/10/18 23:39
update: none
---

share a file or folder by creating a temporary link

when enabled in the server settings (`--shr`), click the bottom-right `share` button to share the folder you're currently in, or alternatively:

- select a folder first to share that folder instead
- select one or more files to share only those files

this feature was made with [identity providers](#identity-providers) in mind -- configure your reverseproxy to skip the IdP's access-control for a given URL prefix and use that to safely share specific files/folders sans the usual auth checks

when creating a share, the creator can choose any of the following options:

- password-protection
- expire after a certain time; `0` or blank means infinite
- allow visitors to upload (if the user who creates the share has write-access)

semi-intentional limitations:

- cleanup of expired shares only works when global option `e2d` is set, and/or at least one volume on the server has volflag `e2d`
- only folders from the same volume are shared; if you are sharing a folder which contains other volumes, then the contents of those volumes will not be available
- if you change [password hashing](#password-hashing) settings after creating a password-protected share, then that share will stop working
- related to [IdP volumes being forgotten on shutdown](https://github.com/9001/copyparty/blob/hovudstraum/docs/idp.md#idp-volumes-are-forgotten-on-shutdown), any shares pointing into a user's IdP volume will be unavailable until that user makes their first request after a restart
- no option to "delete after first access" because tricky
  - when linking something to discord (for example) it'll get accessed by their scraper and that would count as a hit
  - browsers wouldn't be able to resume a broken download unless the requester's IP gets allowlisted for X minutes (ref. tricky)

specify `--shr /foobar` to enable this feature; a toplevel virtual folder named `foobar` is then created, and that's where all the shares will be served from

- you can name it whatever, `foobar` is just an example
- if you're using config files, put `shr: /foobar` inside the `[global]` section instead

users can delete their own shares in the controlpanel, and a list of privileged users (`--shr-adm`) are allowed to see and/or delet any share on the server

after a share has expired, it remains visible in the controlpanel for `--shr-rt` minutes (default is 1 day), and the owner can revive it by extending the expiration time there

**security note:** using this feature does not mean that you can skip the [accounts and volumes](#accounts-and-volumes) section -- you still need to restrict access to volumes that you do not intend to share with unauthenticated users! it is not sufficient to use rules in the reverseproxy to restrict access to just the `/share` folder.
