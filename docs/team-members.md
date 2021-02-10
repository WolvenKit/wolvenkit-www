# Adding Team Members

## Introduction
As people come and contribute to the Red Modding Tools they will be added to this folder. This folder will contain individual folders for every member that contains their info and a profile picture if they want.

## General Information
You will notice there is a `profileImage` section in the YAML file, this is an optional field and does not need to be supplied. If you are suppling an image feel free to put in the directory with the members name and jpg extension and it will be picked up automatically. If your image is not a jpg file, either convert it or supply the file name in the `profileImage` section.

## Process
First create a new folder in the `teamMembers` directory with the member's name, create a new YAML file in this folder with the team member's name.

The YAML structure will look something like this.

```yaml
name:
description:
profileImage:
projects:
```

**Note** please do note that whatever is put in the name field is what you must put in the `team.yaml` file if this user will be sorted.

### Example
```yaml
name: ExampleUser
description: An interesting summary of ExampleUser would go here
profileImage: profile.png
projects:
  - someProject
  - someProject 2
```

## Images
As seen by the above example we have defined an image for the user, in this circumstance the website will look in that folder for `profile.png`. If this was not defined it would try looking for `ExampleUser.jpg`.

## Directory Structure
```bash
└── teamMembers
    └── ExampleUser
        ├── ExampleUser.yaml
        └── profile.png
```

Do note that the folder name and yaml file name don't really matter, but it would good if we could keep these as close as possible to the member's actual username.
