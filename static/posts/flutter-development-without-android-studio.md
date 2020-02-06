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
# Install dependencies
yay -S android-platform android-sdk android-sdk-build-tools \
  android-sdk-platform-tools flutter flutter-dev android-emulator
```

Then, as per the Arch Wiki, create a new group for the android-sdk directory:

```bash
# Add a new group
groupadd android-sdk

# Add our user to the group
gpasswd -a ${USER} android-sdk

# Set permissions in this directory
setfacl -R -m g:android-sdk:rwx /opt/android-sdk
setfacl -d -m g:android-sdk:rwX /opt/android-sdk

# This is only necessary if you don't want to log out and back in
newgrp android-sdk
```

And then use `sdkmanager` to set up the Android binaries/emulator/etc.

```bash
# Download the packages we need
# Note: I am not an Android expert, not sure if you really need all these
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

Then things worked relatively well for me. I don't really know why the group hack in
the wiki doesn't work for me.
