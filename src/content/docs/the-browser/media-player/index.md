---
number: 31
title: media player
description: plays almost every audio format there is
date: 2025/10/18 23:54
update: none
---

plays almost every audio format there is (if the server has FFmpeg installed for on-demand transcoding)

the following audio formats are usually always playable, even without FFmpeg: `aac|flac|m4a|mp3|ogg|opus|wav`

some highlights:

- OS integration; control playback from your phone's lockscreen ([windows](https://user-images.githubusercontent.com/241032/233213022-298a98ba-721a-4cf1-a3d4-f62634bc53d5.png) // [iOS](https://user-images.githubusercontent.com/241032/142711926-0700be6c-3e31-47b3-9928-53722221f722.png) // [android](https://user-images.githubusercontent.com/241032/233212311-a7368590-08c7-4f9f-a1af-48ccf3f36fad.png))
- shows the audio waveform in the seekbar
- not perfectly gapless but can get really close (see settings + eq below); good enough to enjoy gapless albums as intended
- videos can be played as audio, without wasting bandwidth on the video
- adding `?v` to the end of an audio/video/image link will make it open in the mediaplayer

click the `play` link next to an audio file, or copy the link target to [share it](https://a.ocv.me/pub/demo/music/Ubiktune%20-%20SOUNDSHOCK%202%20-%20FM%20FUNK%20TERRROR!!/#af-1fbfba61&t=18) (optionally with a timestamp to start playing from, like that example does)

open the `[🎺]` media-player-settings tab to configure it,

- "switches":
  - `[🔁]` repeats one single song forever
  - `[🔀]` shuffles the files inside each folder
  - `[preload]` starts loading the next track when it's about to end, reduces the silence between songs
  - `[full]` does a full preload by downloading the entire next file; good for unreliable connections, bad for slow connections
  - `[~s]` toggles the seekbar waveform display
  - `[/np]` enables buttons to copy the now-playing info as an irc message
  - `[📻]` enables buttons to create an [m3u playlist](#playlists) with the selected songs
  - `[os-ctl]` makes it possible to control audio playback from the lockscreen of your device (enables [mediasession](https://developer.mozilla.org/en-US/docs/Web/API/MediaSession))
  - `[seek]` allows seeking with lockscreen controls (buggy on some devices)
  - `[art]` shows album art on the lockscreen
  - `[🎯]` keeps the playing song scrolled into view (good when using the player as a taskbar dock)
  - `[⟎]` shrinks the playback controls
- "buttons":
  - `[uncache]` may fix songs that won't play correctly due to bad files in browser cache
- "at end of folder":
  - `[loop]` keeps looping the folder
  - `[next]` plays into the next folder
- "transcode":
  - `[flac]` converts `flac` and `wav` files into opus (if supported by browser) or mp3
  - `[aac]` converts `aac` and `m4a` files into opus (if supported by browser) or mp3
  - `[oth]` converts all other known formats into opus (if supported by browser) or mp3
    - `aac|ac3|aif|aiff|alac|alaw|amr|ape|au|dfpwm|dts|flac|gsm|it|m4a|mo3|mod|mp2|mp3|mpc|mptm|mt2|mulaw|ogg|okt|opus|ra|s3m|tak|tta|ulaw|wav|wma|wv|xm|xpk`
- "transcode to":
  - `[opus]` produces an `opus` whenever transcoding is necessary (the best choice on Android and PCs)
  - `[awo]` is `opus` in a `weba` file, good for iPhones (iOS 17.5 and newer) but Apple is still fixing some state-confusion bugs as of iOS 18.2.1
  - `[caf]` is `opus` in a `caf` file, good for iPhones (iOS 11 through 17), technically unsupported by Apple but works for the most part
  - `[mp3]` -- the myth, the legend, the undying master of mediocre sound quality that definitely works everywhere
  - `[flac]` -- lossless but compressed, for LAN and/or fiber playback on electrostatic headphones
  - `[wav]` -- lossless and uncompressed, for LAN and/or fiber playback on electrostatic headphones connected to very old equipment
    - `flac` and `wav` must be enabled with `--allow-flac` / `--allow-wav` to allow spending the disk space
- "tint" reduces the contrast of the playback bar
