---
isDraft: false
title: 'Building a split keyboard (and why you might want to do it)'
abstract: "We'll explore the benefits of building your own split keyboard, and how to pick the model that best fits your needs."
image:
  src: '/ferris_sweep_blu.png'
  alt: 'Ferris Sweep Bling LP Bluetooth'
tags: ['Ergonomic Keyboard', 'Ferris Sweep', 'DIY']
publishedOn: '2025-05-25'
---

## Why I Built My Own Split Keyboard: A Journey to Comfort and Efficiency

For years, I typed on Apple’s Magic Keyboard, assuming it was "good enough"—until the discomfort became impossible to ignore. After long coding or writing sessions, my shoulders ached from the unnatural, hunched posture forced by the keyboard’s narrow layout. My hands, cramped together, seemed to amplify tension rather than productivity. Worse, despite years of typing, I still found myself glancing down at the keys, struggling to build muscle memory. The excessive key travel and staggered rows meant my fingers had to wander too far, breaking my flow.

I knew I needed a change. **Split keyboards** promised relief by letting my hands rest at a natural shoulder-width distance, but the pre-built options were either prohibitively expensive (like the $300+ Moonlander or Advantage360) or bulky (such as the Glove80, which seems fantastic but hardly portable). Frustrated, I stumbled upon the vibrant world of **DIY mechanical keyboards**—and it felt like a revelation.

The community had already solved my problem. Dozens of **open-source keyboard designs** existed, with passionate builders sharing schematics, firmware, and modding tips. After weeks of research, I fell for the **Ferris Sweep**: a sleek, ultra-compact and minimalist 34 keys split keyboard with a column-staggered layout designed for ergonomic typing. It checked every box—portable, cheap to make, and painstakingly optimized for efficiency.

Building it myself wasn’t just a cost-saving hack; it was a deep dive into a hobby that blends engineering, ergonomics, and sheer creativity. Here’s why I chose it, how I built it, and what I’ve learned after a year of daily use.

## Why the Ferris Sweep Bling LP Won Me Over

The [Ferris Sweep Bling LP](https://github.com/davidphilipbarr/Sweep), from David Barr based on the work from Pierre Chevalier, wasn’t just another keyboard—it was a deliberate answer to my ergonomic and practical needs. Here’s why it stood out:

**1. Ergonomics, Optimized**  
The **split design** freed my hands to rest at a natural shoulder-width distance, eliminating the shoulder strain I’d endured with traditional keyboards. Paired with an **ortholinear, column-staggered layout**, it minimized finger stretching by aligning keys to my fingertips’ natural movement.

**2. Ultra-Portable, Ultra-Sleek**  
With only **34 keys** and **low-profile Choc switches**, the Sweep’s entire body sits under 22mm tall. It's lightweight and compact, making it easy to toss in my bag and to fit anywhere, even on cramped coffee shop tables. I 3d-printed two custom cases that adds minimal bulk while protecting the internals: a [long but thin one](https://www.printables.com/model/904660-ferris-sweep-travel-case) and a [smaller but thicker one](https://www.printables.com/model/1168023-ferris-sweep-travel-case-v2-print-in-place).

**3. A Community-Backed Build**  
From firmware tweaks to Bluetooth mods, the Ferris Sweep’s **open-source roots** meant I wasn’t alone. Forums and GitHub repos overflowed with keymap inspiration, troubleshooting tips, and even hardware upgrades (like my eventual leap to wireless). That safety net gave me confidence to tinker.

**4. Budget-Friendly Minimalism**  
While Choc switches cost more than Cherry MX, the Sweep’s **radical minimalism** helps bringing costs down. For under $150, I built a keyboard that rivaled $300+ pre-built splits.

## What to Consider When Choosing a Keyboard

Building your own keyboard is a rare chance to craft a tool that fits your exact needs—but with so many options, it’s worth reflecting on what truly matters to you. Here’s a breakdown of key factors to weigh before diving in:

### 1. Ergonomics: Split, Layout, and Shape

Since ergonomics drove my search, I focused solely on **split keyboards**, but even within that category, choices abound:

- **Layout & Number of Keys**:
  - Prefer a familiar layout? Keyboards like the **ZSA Voyager**, **Lily58** or **Sofle** offer split designs with standard key counts.
  - Want radical minimalism? My 34 key Ferris Sweep forced me to adopt optimized layers, but the tradeoff was portability and a steeper learning curve.
- **Curved or Flat?**
  - Keyboards like the **Glove80** or **Kinesis Advantage360** curve keys to further reduce finger motion. While tempting, their bulk clashed with my need for portability—though I’d love to try one someday for home use.
- **Tenting (Adjustable Inclination)**:
  - Some keyboards like the **Moonlander** include built-in tenting. For DIY builds, if you have access to a 3D printer, you can find tenting accessories to print. I tried [this one] for the Ferris Sweep, but didn't stick to it (yet).

### 2. Budget: DIY vs. Pre-Built

- **DIY keyboards** are often far cheaper. My Ferris Sweep cost under **$100**, while pre-built ergonomic splits can exceed **$300**.
- Some shops (e.g., **Boardsource**, **SplitKB**) sell pre-soldered DIY kits at a slight premium, saving time without breaking the bank.
- If budget isn’t a constraint, the **ZSA Voyager** or **Kinesis Advantage360** are solid options.

### 3. Switch Type: Feel and Flexibility

- **Choc Low-Profile vs. Cherry MX**: I chose **Kailh Choc switches** for their slim profile, though they’re pricier than Cherry MX.
- **Hot-Swap matters**: As a newcomer to mechanical keyboards, I prioritized hot-swap sockets to experiment with different switches without resoldering.

### 4. Build Difficulty: Time vs. Reward

- **Soldering Required?** Most builds (like mine) need basic soldering. Thankfully, it’s beginner-friendly.
- **RGB/Backlighting**: It can be really nice, but it adds complexity (and cost). I skipped it because it wasn't essential to me.
- **No Tools?** Opt for a **pre-soldered PCB** or a hot-swap kit to avoid soldering entirely.

### 5. Firmware & Programmability

- **QMK/ZMK Compatibility** is non-negotiable for me. These open-source firmware systems let you create custom layers, macros, and even wireless support (via ZMK).
- **Pre-Built Convenience**: If coding keymaps sounds daunting, pre-builts often include user-friendly configurators (e.g., ZSA’s Oryx).

## **Bill of Materials & Cost**

I built **two versions** of the Ferris Sweep Bling LP: a _wired_ home setup and a _Bluetooth_ travel companion. Below are the components for **one build** (total: **~$140 wired / ~$150 wireless**), with notes on where I saved or splurged:

#### **Core Components**

- **PCB**: Ordered from JLCPCB using [David Barr’s open-source design](https://github.com/davidphilipbarr/Sweep) ($15–25 for 5 boards).
- **Microcontrollers**:
  - _Wired_: 2x **[ProMicro RP2040](https://www.aliexpress.us/item/1005006604204584.html?spm=a2g0o.order_list.order_list_main.70.72831802QA2ICf&gatewayAdapt=4itemAdapt)** ($5 each).
  - _Wireless_: 3x **[NRF52840](https://www.aliexpress.us/item/1005008099333183.html?spm=a2g0o.order_list.order_list_main.25.72831802QA2ICf&gatewayAdapt=4itemAdapt)** ($3 each; 2 for halves, 1 optional for USB dongle).
- **Hotswap Sockets**: 34x **Choc hotswap sockets** like like [these](https://www.aliexpress.us/item/3256808692980731.html?spm=a2g0o.productlist.main.3.25e27cd4Xw4oiT&algo_pvid=ae35fc02-49b1-4437-b83e-e1f2540054dc&algo_exp_id=ae35fc02-49b1-4437-b83e-e1f2540054dc-2&pdp_ext_f=%7B%22order%22%3A%22-1%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21GBP%216.84%213.07%21%21%219.03%214.06%21%402103847817482638843885646e5573%2112000047061145560%21sea%21US%214906360034%21X&curPageLogUid=sXF1SErJx5Gh&utparam-url=scene%3Asearch%7Cquery_from%3A) ($5/100).
- **Switches**: 34x **[LowProKB Ambient Twilight](https://mechboards.co.uk/products/lowprokb-ambients-twilight?_pos=6&_fid=c08e9b67d&_ss=c)** (silent Choc Reds, $60/35—my splurge!). Cheaper options exist.
- **Keycaps**: 34x like [these](https://www.aliexpress.us/item/3256806548230734.html?spm=a2g0o.order_list.order_list_main.45.72831802QA2ICf&gatewayAdapt=glo2usa4itemAdapt) ($25/50).
- **2 power switches**: [**10 MSK-12C02**](https://www.aliexpress.us/item/2255799970284307.html?spm=a2g0o.order_list.order_list_main.85.72831802QA2ICf&gatewayAdapt=glo2usa4itemAdapt) ($1.50/10).
- **2 reset switches**: [**10 B3U-1000P**](https://www.aliexpress.us/item/3256804580884419.html?spm=a2g0o.order_list.order_list_main.65.72831802QA2ICf&gatewayAdapt=glo2usa4itemAdapt) ($3.50/10).

#### **Wired vs. Wireless Add-Ons**

- _Wired_: [TRRS jacks](https://www.aliexpress.us/item/3256802925347427.html?spm=a2g0o.order_list.order_list_main.55.72831802QA2ICf&gatewayAdapt=glo2usa4itemAdapt) ($2/10) + [cable](https://www.aliexpress.us/item/2255799918035646.html?spm=a2g0o.order_list.order_list_main.50.72831802QA2ICf&gatewayAdapt=glo2usa4itemAdapt) ($2.50).
- _Wireless_: 2x **LiPo batteries** like [these](https://www.ebay.co.uk/itm/375674742251) ($8 each; 3-month battery life).

#### **Optional Upgrades**

- **Mill-Max Sockets and Pins** ($11): for instance [these pins](https://mechboards.co.uk/products/mill-max-socket-pins) with [these sockets](https://mechboards.co.uk/products/machine-pin-sockets). Lets you swap controllers (e.g., wired → wireless) without rebuilding. _(See tip below!)_
- **3D-Printed Case**: [Print your own](https://www.printables.com/model/782368-ferris-sweep-bling-lp) or [buy one](https://mechboards.co.uk/products/3d-printed-ferris-sweep-case) for protection.

### **Build Tips & Lessons Learned**

1. **Socketing Controllers**:

   - Use a **breadboard + tape** to align Mill-Max pins before soldering (see image below). A magnet helps collect stray pins!  
     ![Mill-Max socketing method using a breadboard and tape](/mill_max_socketing.jpeg)

2. **Battery Safety**:

   - ⚠️ **Always tape one LiPo wire** while soldering to avoid shorts. Store spares in a **fireproof bag**.

3. **Cases Matter**:
   - A case protects the PCB and adds grip. I 3D-printed mine, but pre-made options exist.

_(For a full build guide, see [Kyek’s YouTube tutorial](https://www.youtube.com/watch?v=fBPu7AyDtkM&t=49s).)_

![Final build of the Ferris Sweep Bling LP](/ferris_sweep_final.jpeg)

## **One Year With the Ferris Sweep: Comfort, Customization, and Compromises**

### **From Daunted to Devoted: The Learning Curve**

When I first started to use my 34 key Ferris Sweep, I stared at the bare PCB like it was a puzzle. _How would I code without dedicated keys for numbers or symbols?_ But the open-source community came to the rescue, with many keymaps I could draw inspiration from. My main use case is coding, so I focused my keymap on facilitating Vim motions and access to symbols. My current keymap can be found [here for QMK](https://github.com/xamcost/qmk_firmware) and [here for ZMK](https://github.com/xamcost/zmk-dongle-screen-sweep).

The adaptation was shockingly fast:

- **1 week**: Nearly back to my original typing speed (since only symbols/layers needed remapping).
- **1 month**: Fully fluent with home-row modifiers (`Shift`, `Ctrl`, etc. under ASDF/JKL;). No more pinky gymnastics for `Shift` and `Ctrl`!
- **3 months**: Added **combos** (e.g., `J+K` for `Esc`, `E+R` for `Tab`, `U+I` for `Caps Lock`, `Space+Backspace` for `Enter`, ...) and **tap-dance** (double-tap thumbs for layer toggles).

### **The Ergonomics Payoff**

Speed wasn’t the goal, **endurance** was. Mission accomplished:

- ✅ **No more shoulder pain** from cramped hands.
- ✅ **Mechanical bliss**: Choc switches’ low profile and quiet clicks ruined rubber domes forever.
- ✅ **Layers > Stretching**: Symbols and numbers live on thumb-activated layers, reducing finger travel.

### **Where the Ferris Sweep Falls Short**

It’s not perfect, but the tradeoffs were worth it for me:

- **Thumb Keys**: Two per side works, but a **third** (like on the Corne or Swoop keyboards) could be a nice addition for `Tab`/`Enter`.
- **Gaming**: Home row modifiers doesn't play nicely with gaming, and you may miss the top number rows. I still use my old Magic Keyboard for gaming, but it’s a minor inconvenience considering how rarely I game.
- **French Accents**: My mapping ignores them (I write mostly in English), but adding a dedicated "accent layer" is doable, just not my priority.

### **Final Verdict**

The Ferris Sweep forced me to **type smarter, not harder**. A year later, I’d choose it again for its portability, ergonomics, and the joy of a _truly_ personalized tool. But if you game often or need heavy language support, other keyboards might suit you better.

### **Conclusion: A Journey Worth Taking & Where to Next**

Building the Ferris Sweep was my gateway into the vast, endlessly creative world of **keyboard ergonomics**, a world I now realize I’ve only begun to explore. From tenting to curved key wells, or even mounting halves on my chair’s arms, there’s so much left to experiment with. But one lesson stands above all: **our default keyboards are relics of the past**, and settling for them means ignoring decades of ergonomic progress.

#### **The QWERTY Elephant in the Room**

The biggest bottleneck to comfort and speed isn’t just the keyboard’s shape: it’s the **QWERTY layout itself**. Designed to _slow down_ typists on mechanical typewriters, it forces awkward finger movements that even the best ergo boards can’t fully fix. Switching to **Colemak or Dvorak** feels inevitable now, though I’ve hesitated (thanks to occasional laptop use). But someday soon, I’ll take the plunge—because why optimize the hardware without refining the software?

#### **A Call to Action**

Let’s be honest: soldering diodes and tweaking firmware isn’t for everyone. But if you spend **hours daily at a computer**, investing in a **split ergonomic keyboard** (DIY or pre-built) is one of the highest-return upgrades you can make. Shoulder pain, wrist strain, and inefficiency aren’t inevitabilities: they’re design failures we’ve tolerated for too long.

The Ferris Sweep taught me that typing shouldn’t hurt. It shouldn’t feel like a chore. And with a little curiosity, it can even become **a joy**. So to anyone still pecking at a flat, cramped keyboard: your hands deserve better.

_(Want to start your own journey? Check out the [open-source Ferris Sweep repo](https://github.com/davidphilipbarr/Sweep) or communities like [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/).)_
