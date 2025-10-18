---
number: 8
title: not my bugs
description: not my bugs
date: 2025/10/18 22:51
update: none
---

same order here too

- [Chrome issue 1317069](https://bugs.chromium.org/p/chromium/issues/detail?id=1317069) -- if you try to upload a folder which contains symlinks by dragging it into the browser, the symlinked files will not get uploaded

- [Chrome issue 1352210](https://bugs.chromium.org/p/chromium/issues/detail?id=1352210) -- plaintext http may be faster at filehashing than https (but also extremely CPU-intensive)

- [Chrome issue 383568268](https://issues.chromium.org/issues/383568268) -- filereaders in webworkers can OOM / crash the browser-tab
  - copyparty has a workaround which seems to work well enough

- [Firefox issue 1790500](https://bugzilla.mozilla.org/show_bug.cgi?id=1790500) -- entire browser can crash after uploading ~4000 small files

- Android: music playback randomly stops due to [battery usage settings](#fix-unreliable-playback-on-android)

- iPhones: the volume control doesn't work because [apple doesn't want it to](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW11)
  - `AudioContext` will probably never be a viable workaround as apple introduces new issues faster than they fix current ones

- iPhones: music volume goes on a rollercoaster during song changes
  - nothing I can do about it because `AudioContext` is still broken in safari

- iPhones: the preload feature (in the media-player-options tab) can cause a tiny audio glitch 20sec before the end of each song, but disabling it may cause worse iOS bugs to appear instead
  - just a hunch, but disabling preloading may cause playback to stop entirely, or possibly mess with bluetooth speakers
  - tried to add a tooltip regarding this but looks like apple broke my tooltips

- iPhones: preloaded awo files make safari log MEDIA_ERR_NETWORK errors as playback starts, but the song plays just fine so eh whatever
  - awo, opus-weba, is apple's new take on opus support, replacing opus-caf which was technically limited to cbr opus

- iPhones: preloading another awo file may cause playback to stop
  - can be somewhat mitigated with `mp.au.play()` in `mp.onpreload` but that can hit a race condition in safari that starts playing the same audio object twice in parallel...

- Windows: folders cannot be accessed if the name ends with `.`
  - python or windows bug

- Windows: msys2-python 3.8.6 occasionally throws `RuntimeError: release unlocked lock` when leaving a scoped mutex in up2k
  - this is an msys2 bug, the regular windows edition of python is fine

- VirtualBox: sqlite throws `Disk I/O Error` when running in a VM and the up2k database is in a vboxsf
  - use `--hist` or the `hist` volflag (`-v [...]:c,hist=/tmp/foo`) to place the db and thumbnails inside the vm instead
    - or, if you only want to move the db (and not the thumbnails), then use `--dbpath` or the `dbpath` volflag
  - also happens on mergerfs, so put the db elsewhere

- Ubuntu: dragging files from certain folders into firefox or chrome is impossible
  - due to snap security policies -- see `snap connections firefox` for the allowlist, `removable-media` permits all of `/mnt` and `/media` apparently
