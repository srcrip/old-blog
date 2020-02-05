---
slug: compiling-godot-on-arch-linux
title: Compiling Godot on Arch Linux
date: 2020-01-13
author: sevensidedmarble
keywords: godot, game dev, arch linux
description: How to get Godot running from source.
published: true
---

I like using the AUR package for most things if it's available, but I recently
got very interested in the impressive [Voxel
Tools](https://github.com/Zylann/godot_voxel) package for Godot, made by
[Zylann](https://github.com/Zylann). To use it, you need to compile Godot from source.

I had some issues getting this to work at first, and eventually realized I
needed the `libglvnd` package on Arch. I'm not sure why the documentation
doesn't mention this on the Arch Wiki. Maybe my system is just weird. But you
can try to install it all with:

```sh
pacman -S libglvnd scons pkgconf gcc libxcursor libxinerama \
  libxi libxrandr mesa glu alsa-lib pulseaudio freetype2 yasm
```

Hope that helps you if you're getting any weird errors compiling Godot.
