#!/usr/bin/env node
const { init } = require('./commands/init');
const { add } = require('./commands/add');
const { status } = require('./commands/status');
const { commit } = require('./commands/commit');
const { push } = require('./commands/push');
const { gitignore } = require('./commands/gitignore');
const { commitPush } = require('./commands/commitPush');
const { remote } = require('./commands/remote');
const { findCommand } = require('./commands/findCommand');
const meow = require('meow');
const chalk = require('chalk');

// syntax: meow(helpText, options?)

const cli = meow(`
        ${chalk.cyan("Usage")}
            $ igm

        ${chalk.cyan("Options")}
            --init, -i, Initialize git repository
            --remote, -r, Add remote git url
            --status, -s Shows changes of your git project
            --add, -a Add all changes to staging area
            --commit, -o Commit changes
            --push, -p Push changes to remote repository
            --commitPush, -c Commit and Push together to github Remote Repository
            --gitignore, -g Create gitignore file or overwrite the contents of gitignore file
            --help, -h Shows help for all commands

        ${chalk.cyan("Examples")}
            $ igm -h
            $ igm -a
            $ igm -c
`,
{
    flags: {
        init: {
            type: 'boolean',
            alias: 'i'
        },
        remote: {
            type: 'boolean',
            alias: 'r'
        },
        status: {
            type: 'boolean',
            alias: 's'
        },
        add: {
            type: 'boolean',
            alias: 'a'
        },
        commitPush: {
            type: 'boolean',
            alias: 'c'
        },
        commit: {
            type: 'boolean',
            alias: 'o'
        },
        push: {
            type: 'boolean',
            alias: 'p'
        },
        gitignore: {
            type: 'boolean',
            alias: 'g'
        },
        version: {
            type: 'boolean',
            alias: 'v'
        }
    }
});


const options = {
    init: () => init(),
    remote: () => remote(),
    status : () => status(),
    add : () => add(),
    commitPush : () => commitPush(),
    commit: () => commit(),
    push: () => push(),
    gitignore: () => gitignore()
}

findCommand(cli,options);