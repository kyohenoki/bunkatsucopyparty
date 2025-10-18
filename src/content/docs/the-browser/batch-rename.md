---
number: 27
lang: en
title: batch rename
description: select some files and press `F2` to bring up the rename UI
date: 2025/10/18 23:43
update: none
---

select some files and press `F2` to bring up the rename UI

![batch-rename-fs8](/src/content/images/128434204-eb136680-3c07-4ec7-92e0-ae86af20c241.png)

quick explanation of the buttons,

- `[✅ apply rename]` confirms and begins renaming
- `[❌ cancel]` aborts and closes the rename window
- `[↺ reset]` reverts any filename changes back to the original name
- `[decode]` does a URL-decode on the filename, fixing stuff like `&amp;` and `%20`
- `[advanced]` toggles advanced mode

advanced mode: rename files based on rules to decide the new names, based on the original name (regex), or based on the tags collected from the file (artist/title/...), or a mix of both

in advanced mode,

- `[case]` toggles case-sensitive regex
- `regex` is the regex pattern to apply to the original filename; any files which don't match will be skipped
- `format` is the new filename, taking values from regex capturing groups and/or from file tags
  - very loosely based on foobar2000 syntax
- `presets` lets you save rename rules for later

available functions:

- `$lpad(text, length, pad_char)`
- `$rpad(text, length, pad_char)`

two counters are available; `.n.s` is the nth file in the selection, and `.n.d` the nth file in the folder, for example rename-output `file(.n.d).(ext)` gives `file5.bin`, and `beach-$lpad((.n.s),3,0).(ext)` is `beach-017.jpg` and the initial value of each counter can be set in the textboxes underneath the preset dropdown

so,

say you have a file named [`meganeko - Eclipse - 07 Sirius A.mp3`](https://www.youtube.com/watch?v=-dtb0vDPruI) (absolutely fantastic album btw) and the tags are: `Album:Eclipse`, `Artist:meganeko`, `Title:Sirius A`, `tn:7`

you could use just regex to rename it:

- `regex` = `(.*) - (.*) - ([0-9]{2}) (.*)`
- `format` = `(3). (1) - (4)`
- `output` = `07. meganeko - Sirius A.mp3`

or you could use just tags:

- `format` = `$lpad((tn),2,0). (artist) - (title).(ext)`
- `output` = `7. meganeko - Sirius A.mp3`

or a mix of both:

- `regex` = `- ([0-9]{2})`
- `format` = `(1). (artist) - (title).(ext)`
- `output` = `07. meganeko - Sirius A.mp3`

the metadata keys you can use in the format field are the ones in the file-browser table header (whatever is collected with `-mte` and `-mtp`)
