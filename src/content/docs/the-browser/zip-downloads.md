---
number: 18
title: zip downloads
description: zip downloads
date: 2025/10/18 23:12
update: none
---

download folders (or file selections) as `zip` or `tar` files

select which type of archive you want in the `[⚙️] config` tab:

| name      | url-suffix | description                                                |
| --------- | ---------- | ---------------------------------------------------------- |
| `tar`     | `?tar`     | plain gnutar, works great with `curl \| tar -xv`           |
| `pax`     | `?tar=pax` | pax-format tar, futureproof, not as fast                   |
| `tgz`     | `?tar=gz`  | gzip compressed gnu-tar (slow), for `curl \| tar -xvz`     |
| `txz`     | `?tar=xz`  | gnu-tar with xz / lzma compression (v.slow)                |
| `zip`     | `?zip`     | works everywhere, glitchy filenames on win7 and older      |
| `zip_dos` | `?zip=dos` | traditional cp437 (no unicode) to fix glitchy filenames    |
| `zip_crc` | `?zip=crc` | cp437 with crc32 computed early for truly ancient software |

- gzip default level is `3` (0=fast, 9=best), change with `?tar=gz:9`
- xz default level is `1` (0=fast, 9=best), change with `?tar=xz:9`
- bz2 default level is `2` (1=fast, 9=best), change with `?tar=bz2:9`
- hidden files ([dotfiles](#dotfiles)) are excluded unless account is allowed to list them
  - `up2k.db` and `dir.txt` is always excluded
- bsdtar supports streaming unzipping: `curl foo?zip | bsdtar -xv`
  - good, because copyparty's zip is faster than tar on small files
    - but `?tar` is better for large files, especially if the total exceeds 4 GiB
- `zip_crc` will take longer to download since the server has to read each file twice
  - this is only to support MS-DOS PKZIP v2.04g (october 1993) and older
    - how are you accessing copyparty actually

you can also zip a selection of files or folders by clicking them in the browser, that brings up a selection editor and zip button in the bottom right

![copyparty-zipsel-fs8](/src/content/images/129635374-e5136e01-470a-49b1-a762-848e8a4c9cdc.png)

cool trick: download a folder by appending url-params `?tar&opus` or `?tar&mp3` to transcode all audio files (except aac|m4a|mp3|ogg|opus|wma) to opus/mp3 before they're added to the archive

- super useful if you're 5 minutes away from takeoff and realize you don't have any music on your phone but your server only has flac files and downloading those will burn through all your data + there wouldn't be enough time anyways
- and url-params `&j` / `&w` produce jpeg/webm thumbnails/spectrograms instead of the original audio/video/images (`&p` for audio waveforms)
  - can also be used to pregenerate thumbnails; combine with `--th-maxage=9999999` or `--th-clean=0`
