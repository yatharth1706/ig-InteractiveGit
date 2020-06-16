### igm - Interactive Git Modified CLI

[![npm version](https://img.shields.io/npm/v/igm.svg?style=flat-square)](https://www.npmjs.com/package/igm)
[![npm downloads](https://img.shields.io/npm/dt/igm.svg?style=flat-square)](https://www.npmjs.com/package/igm)
[![GitHub stars](https://img.shields.io/github/stars/yatharth1706/ig-InteractiveGit)](https://github.com/yatharth1706/ig-InteractiveGit/stargazers)
[![David Dependencies](https://img.shields.io/david/yatharth1706/ig-InteractiveGit.svg?style=flat-square)](https://david-dm.org/yatharth1706/ig-InteractiveGit)
[![GitHub issues](https://img.shields.io/github/issues/yatharth1706/ig-InteractiveGit)](https://github.com/yatharth1706ig-InteractiveGit/issues)

:package: Interactive Git CLI easy to use.

### Install

```
    npm install -g igm
```

### Usage

```
        $Usage
            $ igm

        $Options
            --init, -i, Initialize git repository
            --remote, -r, Add remote git url
            --status, -s Shows changes of your git project
            --add, -a Add all changes to staging area
            --commit, -o Commit all changes locally
            --push, -p push all changes to remote repository
            --gitignore, -g Creates a gitignore file
            --commitPush, -c Commit and Push to github Remote Repository
            --help, -h Shows help for all commands
            --pull, -u Pull changes from git remote repository

        $Examples
            $ igm -h
            $ igm -a
            $ igm -c
```

### Tools Used

1. nodejs 
2. meow
3. execa
4. inquirer
5. node-fetch
6. ora
