const inquirer = require('inquirer');
const execa = require('execa');
const choices = ["Add a remote repository", "Rename a repository", "Check how many remote repositories are attached","Remove the remote repository"];
const chalk = require('chalk');

const remoteQuestions = [
    {
        type: 'list',
        choices: choices,
        name: 'remoteChoice',
        message: 'Choose any one of the following? '
    }
] 

const AddQuestions = [
    {
        type: 'input',
        name: 'remoteName',
        message: 'Enter remote repo name: ',
        default: 'origin'
    },
    {
        type: 'input',
        name: 'remoteUrl',
        message: 'Enter url of your repository: ',
    }
]

function remote() {
    inquirer.prompt(remoteQuestions).then((answers) => {
        if(answers.remoteChoice.startsWith("A")){
            
            inquirer.prompt(AddQuestions).then((answers) => {
                
                try{

                    (
                        async () => {
                            const {stdout} = execa('git', ['remote','add',answers.remoteName, answers.remoteUrl], {
                                stdout: 'inherit'
                            });

                            console.log(chalk.blueBright("Remote Added Successfully!!"));
                        }
                    )();

                }catch(error){
                    console.log(error);
                }
            })

        }else if(answers.remoteChoice.startsWith("Ren")){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'oldRemote',
                    message: 'Enter Old Remote Name: '
                },
                {
                    type: 'input',
                    name: 'newRemote',
                    message: 'Enter New Remote Name: '
                }

            ]).then((answers) => {
                
                try{

                    (
                        async () => {
                            const {stdout} = execa('git', ['remote', 'rename', answers.oldRemote, answers.newRemote], {
                                stdout: 'inherit'
                            });

                            console.log(chalk.blueBright("Renamed Successfully"));
                        }
                    )();
    
                }catch(error){
                    console.log(error);
                }

            }) 
        }
        else if(answers.remoteChoice.startsWith("C")){
            try{

                (
                    async () => {
                        const {stdout} = execa('git', ['remote'], {
                            stdout: 'inherit'
                        });

                    }
                )();

            }catch(error){
                console.log(error);
            }
        }else if(answers.remoteChoice.startsWith("Rem")){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'remoteName',
                    message: 'Enter remote name: '
                }
            ]).then((answers) => {
                
                try{

                    (
                        async () => {
                            const {stdout} = execa('git', ['remote', 'remove', answers.remoteName], {
                                stdout: 'inherit'
                            });

                            console.log(chalk.blueBright("Removed Successfully"));
                        }

                        
                    )();
    
                }catch(error){
                    console.log(error);
                }

            })
        }
    })
}

module.exports = {
    remote
}