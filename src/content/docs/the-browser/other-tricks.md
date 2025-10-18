---
number: 39
lang: en
title: other tricks
description: other tricks
date: 2025/10/18 0:06
update: none
---

- you can link a particular timestamp in an audio file by adding it to the URL, such as `&20` / `&20s` / `&1m20` / `&t=1:20` after the `.../#af-c8960dab`

- enabling the audio equalizer can help make gapless albums fully gapless in some browsers (chrome), so consider leaving it on with all the values at zero

- get a plaintext file listing by adding `?ls=t` to a URL, or a compact colored one with `?ls=v` (for unix terminals)

- if you are using media hotkeys to switch songs and are getting tired of seeing the OSD popup which Windows doesn't let you disable, consider [./contrib/media-osd-bgone.ps1](contrib/#media-osd-bgoneps1)

- click the bottom-left `π` to open a javascript prompt for debugging

- files named `.prologue.html` / `.epilogue.html` will be rendered before/after directory listings unless `--no-logues`

- files named `descript.ion` / `DESCRIPT.ION` are parsed and displayed in the file listing, or as the epilogue if nonstandard

- files named `README.md` / `readme.md` will be rendered after directory listings unless `--no-readme` (but `.epilogue.html` takes precedence)
  - and `PREADME.md` / `preadme.md` is shown above directory listings unless `--no-readme` or `.prologue.html`

- `README.md` and `*logue.html` can contain placeholder values which are replaced server-side before embedding into directory listings; see `--help-exp`
