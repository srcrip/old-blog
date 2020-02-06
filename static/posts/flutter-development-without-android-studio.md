---
slug: flutter-development-without-android-studio
title: Flutter development without Android Studio
date: 2020-02-05
author: sevensidedmarble
keywords: flutter, android, arch linux
description: How to develop Flutter apps on Arch Linux without Android Studio
published: true
---

As I've been using and learning more about Flutter, I've been trying to keep my
development setup as lean as possible. Although I appreciate Android Studio, as
it is a pretty well made IDE, this is linux we're talking about--we have vim,
emacs, etc., we don't need big IDEs if we don't want them.

This is roughly what I've done to set up a dev environment for Flutter.

# Package installation

Using your AUR helper of choice (I personally use `yay`):

```bash
yay -S android-platform android-sdk android-sdk-build-tools android-sdk-platform-tools flutter flutter-dev android-emulator
```

Then, as per the Arch Wiki, create a new group for the android-sdk directory:

```bash
groupadd android-sdk
sudo groupadd android-sdk
gpasswd -a marble android-sdk
sudo gpasswd -a marble android-sdk
setfacl -R -m g:android-sdk:rwx /opt/android-sdk
sudo setfacl -R -m g:android-sdk:rwx /opt/android-sdk
sudo setfacl -d -m g:android-sdk:rwX /opt/android-sdk
newgrp android-sdk
```

And then use `sdkmanager` to set up the Android binaries/emulator/etc.

```bash
sdkmanager "platform-tools" "platforms;android-29" "emulator"
```

Accept the software licenses:

```bash
sdkmanager --licenses
```

You should be able to run `flutter doctor -v` then to ensure everything is setup correctly.

# That should be it right?

Unfortunately, these instructions don't seem to really work for me. Even after
a login/logout, the permissions via the new group we create above did not work
for me. These were instructions on the Arch Linux Wiki. Instead, I ended up
changing the group to my users group:

```bash
chown root:marble -R /opt/android-sdk
```
