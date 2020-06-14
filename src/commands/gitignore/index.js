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
    const fileName = dir + ".gitignore";
    fs.exists(fileName, (exists) => {
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
                            message: `Enter data to write in .gitignore file: (${chalk.red("add spaces for multiple files")})`,
                            validate: (input) => {
                                if(!input){
                                    return chalk.red("Please enter valid commit message!");
                                }

                                return true;
                            }
                        }
                    ]).then((answers) => {
                        let ignoredData = "\n";
                        for(let i=0;i<answers.gitignoreData.length;i++){
                           ignoredData+=(answers.gitignoreData[i]==' ') ? '\n' : answers.gitignoreData[i];
                        }
                      
                        fs.appendFileSync(fileName, ignoredData);
                        console.log(chalk.blueBright("Added data successfully to .gitignore file!!"))
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
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'gitignoreData',
                            message: `Enter data to write in .gitignore file: (${chalk.red("add spaces for multiple files")})`,
                            validate: (input) => {
                                if(!input){
                                    return chalk.red("Please enter valid commit message!");
                                }

                                return true;
                            }
                        }
                    ]).then((answers) => {
                        let ignoredData = "\n";
                        for(let i=0;i<answers.gitignoreData.length;i++){
                           ignoredData+=(answers.gitignoreData[i]==' ') ? '\n' : answers.gitignoreData[i];
                        }
                      
                        fs.writeFileSync(fileName, ignoredData);
                        console.log(chalk.blueBright("Created .gitignore file succesfully!"));
                    })
   
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