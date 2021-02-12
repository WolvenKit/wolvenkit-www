# Modifing General Things

## Introduction
The content directory houses a few general files that manage some parts of the site that may want to be changed down the track.

## General Files

- [`index.yaml`](#indexyaml) - Contains website title and the project pages displayed on the landing page

- [`footer.yaml`](#footeryaml) - Contains the website footer links and columns that are displayed

- [`project.yaml`](#projectyaml) - Decides the order of projects that are displayed on the `/projects` route of the website

- [`team.yaml`](#teamyaml) - List of all the developers involved with WolvenKit and the community

### index.yaml
This file will simply define the site title and list out the projects that are displayed on the landing page, it does not contain the images. For every project that is added here the website will search the `indexImages/` folder for the project images.

In `indexImages/` there must be two images labeled `toolName_Background.jpg` and `toolName_Feature.jpg`. `toolName` MUST be labeled the same as what is listed in the below array.

#### Format
```yaml
title: 
tools:
  - name: 
    description: 
    pageLink:
```

#### Example
```yaml
title: RED Modding Tools
tools:
  - name: WolvenKit
    description: Mod editor/creator for RED Engine games. The point is to have an all in one tool for creating mods for the games made with the engine.
    pageLink: https://github.com/WolvenKit/Wolvenkit
  
  - name: CyberCAT
    description: CyberPunk 2077 Customization Assistant Tool. Work in progress savegame editor.
    pageLink: https://github.com/WolvenKit/CyberCAT
```

#### `indexImages/` Example
As above there are two new tools added, the follow images would be put into the `indexImages/`
- `WolvenKit_Background.jpg`
- `WolvenKit_Feature.jpg`
- `CyberCAT_Background.jpg`
- `CyberCAT_Feature.jpg`

### footer.yaml
The footer file is pretty self explanatory, for every column there is a bunch of links below it. Links can either be page links that will start with `/` for example `/blog`, or links can be outbound to links to other sites like `https://github.com/WolvenKit`.

#### Format
```yaml
title:
columns:
  - title:
    items:
      - name:
        link:
```

#### Example
```yaml
title: Red Modding Tools
columns:
  - title: Main
    items:
      - name: Blog
        link: '/blog'
      - name: Projects
        link: '/projects'
      - name: Team
        link: '/team'

  - title: Contribute
    items:
      - name: Github
        link: https://github.com/WolvenKit
      - name: WolvenKit
        link: https://github.com/WolvenKit/Wolvenkit
      - name: CyberCAT
        link: https://github.com/WolvenKit/CyberCAT
```

### project.yaml
This file is a little bit different to how the `index.yaml` file worked. The array here is only to define the order that projects should be displayed on this page, if a project is not defined on this link it will be ordered by it's file creation date.

If you want to look into creating a project to display on this page click [here](./project-changes.md).

Similarly to the index file the project names that are listed MUST match the `name:` value of the project that should be sorted.

#### Format
```yaml
title:
subtitle: 
projects:
communityProjects:
```

#### Example
```yaml
title: Projects
subtitle: All the projects by the team and community
projects:
  - WolvenKit
  - CP77 Tools
communityProjects:
  - CET
```

### team.yaml
This file will act very similars to the project file in that it only decides the order of the team members. Team members will be stored in the `teamMembers` directory, for more information on this see [here](./team-members.md).

The member names listed must match the name defined for the specific team member in their file for it to be ordered properly.


#### Format
```yaml
subtitle:
members:
```

#### Example
```yaml
subtitle: Showcasing our extensive team who make everything possible
members:
  - Traderain
  - rfuzzo
```
