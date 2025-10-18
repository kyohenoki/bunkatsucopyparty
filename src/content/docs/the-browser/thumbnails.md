---
number: 17
lang: en
title: thumbnails
description: thumbnails
date: 2025/10/18 23:10
update: none
---

press `g` or `田` to toggle grid-view instead of the file listing and `t` toggles icons / thumbnails

- can be made default globally with `--grid` or per-volume with volflag `grid`
- enable by adding `?imgs` to a link, or disable with `?imgs=0`

![copyparty-thumbs-fs8](/src/content/images/129636211-abd20fa2-a953-4366-9423-1c88ebb96ba9.png)

it does static images with Pillow / pyvips / FFmpeg, and uses FFmpeg for video files, so you may want to `--no-thumb` or maybe just `--no-vthumb` depending on how dangerous your users are

- pyvips is 3x faster than Pillow, Pillow is 3x faster than FFmpeg
- disable thumbnails for specific volumes with volflag `dthumb` for all, or `dvthumb` / `dathumb` / `dithumb` for video/audio/images only
- for installing FFmpeg on windows, see [optional dependencies](#optional-dependencies)

audio files are converted into spectrograms using FFmpeg unless you `--no-athumb` (and some FFmpeg builds may need `--th-ff-swr`)

images with the following names (see `--th-covers`) become the thumbnail of the folder they're in: `folder.png`, `folder.jpg`, `cover.png`, `cover.jpg`

- the order is significant, so if both `cover.png` and `folder.jpg` exist in a folder, it will pick the first matching `--th-covers` entry (`folder.jpg`)
- and, if you enable [file indexing](#file-indexing), it will also try those names as dotfiles (`.folder.jpg` and so), and then fallback on the first picture in the folder (if it has any pictures at all)

enabling `multiselect` lets you click files to select them, and then shift-click another file for range-select

- `multiselect` is mostly intended for phones/tablets, but the `sel` option in the `[⚙️] settings` tab is better suited for desktop use, allowing selection by CTRL-clicking and range-selection with SHIFT-click, all without affecting regular clicking
  - the `sel` option can be made default globally with `--gsel` or per-volume with volflag `gsel`

to show `/icons/exe.png` and `/icons/elf.gif` as the thumbnail for all `.exe` and `.elf` files respectively, do this: `--ext-th=exe=/icons/exe.png --ext-th=elf=/icons/elf.gif`

- optionally as separate volflags for each mapping; see config file example below
- the supported image formats are [jpg, png, gif, webp, ico](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types)
  - be careful with svg; chrome will crash if you have too many unique svg files showing on the same page (the limit is 250 or so) -- showing the same handful of svg files thousands of times is ok however

note:

- heif/heifs/heic/heics images usually require the `libvips` [optional dependency](#optional-dependencies) (available in the `iv` docker image, `withFastThumbnails` in nixos)
  - technical trivia: FFmpeg has basic support for tiled heic as of v7.0; need `-show_stream_groups` for correct resolution

config file example:

```yaml
[global]
  no-thumb   # disable ALL thumbnails and audio transcoding
  no-vthumb  # only disable video thumbnails

[/music]
  /mnt/nas/music
  accs:
    r: *     # everyone can read
  flags:
    dthumb   # disable ALL thumbnails and audio transcoding
    dvthumb  # only disable video thumbnails
    ext-th:  exe=/ico/exe.png  # /ico/exe.png is the thumbnail of *.exe
    ext-th:  elf=/ico/elf.gif  # ...and /ico/elf.gif is used for *.elf
    th-covers:  folder.png,folder.jpg,cover.png,cover.jpg  # the default
```
