#!/usr/bin/env node
const { init } = require('./commands/init');
const { add } = require('./commands/add');
const { status } = require('./commands/status');
const { commitPush } = require('./commands/commitPush');
const { remote } = require('./commands/remote');
const { findCommand } = require('./commands/findCommand');
const meow = require('meow');
const chalk = require('chalk');

// syntax: meow(helpText, options?)

const cli = meow(`
        ${chalk.cyan("Usage")}
            $ ig

        ${chalk.cyan("Options")}
            --init, -i, Initialize git repository
            --remote, -r, Add remote git url
            --status, -s Shows changes of your git project
            --add, -a Add all changes to staging area
            --commitPush, Commit and Push to github Remote Repository
            --help, -h Shows help for all commands

        ${chalk.cyan("Examples")}
            $ ig -h
            $ ig -a
            $ ig -c
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
}

findCommand(cli,options);