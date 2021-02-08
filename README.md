## Introduction
Official source of the WolvenKit website. The website is built upon [Nuxt](https://github.com/nuxt/nuxt.js) along with their [nuxt/content](https://github.com/nuxt/content) module for CMS-less content creation.

## CMS-Less?
Yes! Currently the site is working through nuxt/content which will generate static pages based on files in the [`content`](https://github.com/WolvenKit/wolvenkit-www/tree/master/content) directory of this repo. The files are mostly written in markdown, but can be written also in JSON, YAML, XML and CSV. For ease of use, markdown and YAML files are preferred for use here. 

Until the backend system can be created and hooked into the frontend, this CMS Less markdown system will be the way site content is generated.

## Contribute
Eventually, we do want to hook up a backend for the site to run off as usability for non technical people or even people who don't want to setup a dev environment to create a simple blog post. If you're interested in working on a backend, please join the [CP77 Modding Community](https://discord.gg/cp77modding) and inquire about web development there.

In the mean time, please feel free to submit your PRs for anything against this repo and they will be reviewed. 

- [General Changes](https://github.com/WolvenKit/wolvenkit-www/tree/master/docs/general-changes.md)
- [Project Page Changes](https://github.com/WolvenKit/wolvenkit-www/tree/master/docs/project-changes.md)
- Blog Posts - Soon

## Creating/Modifying Content
There are a few steps involved with creating content for the website that you will need to follow. Below are links that will take you to dedicated pages for each process.

Before going though with any of these processes, it is recommended you setup a development environment so you can preview your changes in realtime.

## Build Setup
New to everything? First thing is you'll need to install [Node](https://nodejs.org/en/) grab the latest LTS build of Node and install it. Follow the below instructions in your terminal to get setup.

```bash
# clone repo
$ git clone http://repo.link/r/wolvenkit-www

$ cd wolvenkit-www

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
