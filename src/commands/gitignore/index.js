const fs = require('fs');
const path = require('path');
const execa = require('execa');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');

function gitignore() {
    // first check whether gitignore file exists or not
    // if it exists then we need to append file name else we will create a file and append files
    const dir = process.cwd() + '\\';
    fs.exists(dir + ".gitignore", (exists) => {
        if(exists){
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'fileConfirm',
                    message: '.gitignore already exists. Do you want to add more files/folder in it?',
                    default: 'y'
                }
            ]).then((answers) => {
                if(answers.fileConfirm == true){
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'gitignoreData',
                            message: 'Enter data to write in .gitignore file',

                        }
                    ]).then((answers) => {
                        console.log(answers);
                    })
                }else{
                    console.log(chalk.yellow("Good Bye!!"));
                }
            })
        }else{
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'fileConfirm',
                    message: 'Do you want to create a .gitignore file?',
                    default: 'y'
                    
                }
            ]).then((answers) => {
                if(answers.fileConfirm == true){
                    
                }else{
                    console.log(chalk.yellow("Good Bye!!"));
                }
            })
        }
    });

}

module.exports = {
    gitignore
}