---
title: Cyberpunk 2077 Modding Update Post No. 1
description: It's been a while, and with time comes change! The first updates regarding modding.
headerImage:
thumbnailImage: blogpost2.jpg
headerColor: 10, 70, 230
category: Cyberpunk General Modding
createdAt: 2020-12-17
---

Hey Choombas!

Welcome to the first weekly update post from us at the CP77 Modding Tools Server. It's barely been 3 days since the first post regarding modding, but we simply had to make another one; we have come even closer to being able to mod the game! We toil day and night to make modding a reality, and currently we're working on big stuff. Most importantly, we've started work on our very own mod manager! More on that later in this post.

As is known, we are working on reverse engineering REDEngine 4; specifically, to understand the layout of .archive files and being able to make the game to load our own custom ones. To that end, we're working on a mod manager that not only does the deed, but features a nice, clean GUI for modders of all sorts, beginner and veteran alike!

The mod manager

How exactly is it going to work? The mod manager is going to be separated into 2 main parts.

1. The GUI, an interface for everyone to work with. Here, one can browse mods online and install them, be it manually or via our own site, Cybermods (we have yet to get in touch with Nexus Mods, but we're looking for a way to integrate their API as well). With our slick design, even a complete beginner can install new mods with the press of a button. We're currently prototyping designs, leaning heavily on that of RapidDev's Mod Manager on the Nexus (a frontend, if you will).

Just to be perfectly clear: THE MOD MANAGER ON NEXUSMODS IS NOT AFFILIATED WITH US.
(More here)

<image-lazy src="https://preview.redd.it/6yx3phhhzq561.png?width=1347&format=png&auto=webp&s=c6909626fe33ab9b2f782397784abe17dbfb3bc8"></image-lazy>

2. The GPM, or Game Package Manager, is a CLI for mod management, responsible for installing/building/publishing and downloading mod packages. It's basically the backbone of what's going to be used to mod the game (a backend, if you so wish).

This is just the tip of the iceberg. All our concurrent projects are simply too numerous to list, so to whomever may be intrigued, feel free to join our Discord server and interact with more than 4.5k people interested in modding, or help us out with various areas ranging from reverse engineering on memory level, or helping to get a hang of model and texture formats. We welcome all!

Until then, cheers,
Your RED Modding Team
