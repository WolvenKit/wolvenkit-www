# Modifing Projects

## Introduction
The project directory houses two folders for community projects that the community wishes to display on the site as well as the direct projects managed by the WolvenKit org.

## General Information
The creation of a project does not differ between either folder; it is only the placement of the project that matters.

## Process
Firstly, create a folder in the correct directory, within the folder you will create will be a markdown file named whatever project that is going to be added. In this example we will be using the WolvenKit project, the example will be at the end.

The structure for this file will look like this.
```yaml
---
name:
link: 
image:
getStarted: 
download: 
---
```

You'll notice there are `---` surrounded the YAML, with nuxt/content we use front matter within the markdown files to add some additional information. Anything you write below the triple dashed line will be rendered markdown.

In this circumstance the markdown you write below that front matter will be the short description of your project. Keep it short and sweet.

### Image?
Have an image to go with your project? Great! Don't? That's fine too, you don't need an image to go with your project.

To have the site render an image you can either supply a `.jpg` file with the same name as the project in the same folder or, you can put any image into the folder and specifiy the file name with the `image` field. 

## Example
```yaml
---
name: WolvenKit
link: https://github.com/WolvenKit/Wolvenkit
image: preview.png
getStarted: https://wiki.redmodding.org/
download: https://github.com/WolvenKit/Wolvenkit/releases/latest
---

Mod editor/creator for RED Engine games. The point is to have an all in one tool for creating mods for the games made with the engine.

Originally developed for The Witcher 3, it has been adapted now to support CDPR's new game Cyberpunk 2077.
```

### Example Directory Structure
```bash
└── projects
    └── team
        └── wolvenkit
            ├── wolvenkit.md
            └── preview.png
```
