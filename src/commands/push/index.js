const execa = require('execa');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');

const spinner = new ora({
	text: chalk.red('Pushing Your Code to Github Repository!!')
})

function push() {
    inquirer.prompt([
        {
            type:"input",
            name: "remoteName",
            message: "Enter remote git name: ",
            default: "origin" 
        },
        {
            type:"input",
            name: "branchName",
            message: "Enter branch name: ",
            default: "master"
        }
    ]).then((answers) => {
        (
            async () => {
                spinner.start();
                const {stdout} = await execa('git', ['push','-u',answers.remoteName, answers.branchName]);
                spinner.succeed(chalk("Pushed Successfully!!"));
            }
        )();
    })
}

module.exports = {
    push
}