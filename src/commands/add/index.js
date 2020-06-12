const execa = require('execa');
const inquirer = require('inquirer');
const chalk = require('chalk');
const choices = ['Add all files', 'Specific File'];

const questions = [
    {
        type: 'list',
        name: 'addType',
        choices: choices,
        message: 'What you want to Add? ',
        default: choices[0],
    }
]

function add() {

    inquirer.prompt(questions).then((answers) => {
        if(answers.addType.startsWith('A')){
            try{
                (
                    async () => {
                        const {stdout} = execa('git', ['add', '.'], {
                            stdout: "inherit"
                        })
        
                        console.log(chalk.yellow("Added All files Yayy!!"));
                    }
                )();
            }catch(error){
                console.log(error);
            }
        }else{
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'fileName',
                    message: 'Enter folder/file to add: ',
                }
            ]).then((answers) => {
                try{
                    (
                        async () => {
                            const {stdout} = execa('git', ['add', answers.fileName], {
                                stdout: "inherit"
                            })
            
                            console.log(chalk.yellow(`Added ${answers.fileName} yay!!`));
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
    add
}