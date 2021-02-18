## Introduction
Official source of the WolvenKit website. The website is built upon [Nuxt](https://github.com/nuxt/nuxt.js) along with their [nuxt/content](https://github.com/nuxt/content) module for CMS-less content creation. The future website will be custom hosted with its own backend and headless CMS.

## CMS-Less?
Yes! Currently the site is working through nuxt/content which will generate static pages based on files in the [`content`](./content) directory of this repo. The files are mostly written in markdown, but can be written in JSON, YAML, XML and CSV as well. For ease of use, markdown and YAML files are preferred to use here. 

Until the backend system can be created and hooked into the frontend, this CMS Less markdown system will be the way site content is generated.

## Contribute
Eventually, we do want to hook up a backend for the site to run off as usability for non technical people or even people who don't want to setup a dev environment to create a simple blog post. If you're interested in working on a backend, please join the [CP77 Modding Community](https://discord.gg/Epkq79kd96) and inquire about web development there.

Also check out our issues to look for the current status of the website and backend.
In the mean time, please feel free to submit your PRs for anything against this repo and they will be reviewed. 

## Creating/Modifying Content
There are a few steps involved with creating content for the website that you will need to follow. Below are links that will take you to dedicated pages for each process.

Before going though with any of these processes, it is recommended you setup a development environment so you can preview your changes in realtime.

- [General Changes](./docs/general-changes.md)
- [Project Page Changes](./docs/project-changes.md)
- [Blog Posts](./docs/blog-posts.md)

## Build Setup
New to everything? First thing is you'll need to install [Node](https://nodejs.org/en/) grab the latest LTS build of Node and install it. Follow the below instructions in your terminal to get setup.

```bash
# clone repo
$ git clone https://github.com/WolvenKit/wolvenkit-www

$ cd wolvenkit-www

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Legal
For legal enquiries regarding content on the website create a new issue, pull request or contact us via email at contact@redmodding.org 
