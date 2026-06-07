---
isDraft: false
title: 'Immich e-ink display'
description: 'Display the photos of your Immich instance on an E-ink display powered by a Raspberry Pi'
status: 'done'
image:
  src: '/rpi_inky_immich.png'
  alt: 'e-ink immich'
link: 'https://github.com/xamcost/rpi-inky-immich'
tags: ['Python', 'Raspberry Pi']
---

A very simple project, but fun to do and potentially nice gift to a fellow self-hosting enthusiast! It allows you to display the photos of your [Immich](https://immich.app/) instance on an [Inky](https://github.com/pimoroni/inky/tree/main) e-ink display.

## How it works

It consists of a Python script that runs on a Raspberry Pi connected to an [Inky](https://github.com/pimoroni/inky/tree/main) e-ink display, so that it can display the photos of an [Immich](https://immich.app/) instance. Immich is a self-hosted photo and video backup solution, which provides a REST API to access the photos stored in it. It's an amazing way to self-host your photos, and comes with many features that makes it, at least for me, on par with other widespread services such as Google or Apple photos.

The display comes with a set of buttons, which the script leverages to trigger different actions:

- display a random photo featuring at least one of the people listed in the `IMMICH_PERSON_NAMES` environment variable (if present)
- display a totally random photo without any filter
- shut down the Raspberry Pi

The script comes with a systemd service configuration, so that it can be set up to run at startup and keep running in the background. All instructions to set up the project are available in the [GitHub repository](https://github.com/xamcost/rpi-inky-immich).
