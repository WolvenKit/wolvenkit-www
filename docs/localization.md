# localization

## Introduction
With the player count comming from all over the world, we want to localize the website to include more people who might not speek english good enough. If you want to translate into a not given laguage to want to fix speeling mistakes feel free to open a PR.

## How to?
To add a new language you have to change some files and correct some existing ones.

The follwing files need to be changed: 
- nuxt.config.js
Here you need to add a new block with: 
```js
{
code: 'language code'
file: 'language.js'
name: 'writting name in your translated language'
}
```
**( dont forget to add a "," at the last block )**


The following files need to be added at the corresponding locations:
- language.js [ at: ./locale ]
- language.md [ at: .content/projects/team/ **(projects)** /locale ]
- language.md [ at: .content/projects/community/ **(projects)** /locale ]
- language.md [ at: .content/blog/ "blog" /locales ]

( If you simply want to correct a language, you simply have to correct the files listed above except nuxt.config.js )
