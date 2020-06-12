const execa = require('execa');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const ora = require('ora');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

inquirer.registerPrompt('maxInput', MaxLengthInputPrompt);

const spinner = new ora({
	text: chalk.red('Pushing Your Code to Github Repository!!')
})

const emojisSpinner = new ora({
    text: chalk.green('Loading!!')
})

function commitPush() {
    try{
        emojisSpinner.start();
        // first ask questions about what is the commit message and then ask which emoji you want to use
        fetch('https://raw.githubusercontent.com/yatharth1706/emojigit/master/src/data/emojis.json')
        .then((res) => res.json())
        .then((data) => {
            let tempEmojis = data.gitmojis;
            let emojis = [];
            tempEmojis.forEach((el) => {
                emojis.push({
                    "name" : `${el.emoji} - ${el.description} - ${el.code}`
                })
            });
            emojisSpinner.succeed(chalk.yellow("Configuration for Commit Message!!!"));
            inquirer
            .prompt(
                [
                    
                    {
                        name: 'commitMessage',
                        message: 'Type Commit Message:',
                        validate: (input) => {
                            if(!input){
                                return chalk.red("Please enter valid commit message!");
                            }

                            if(input.length > 50){
                                return chalk.red("Too many characters!!");
                            }

                            return true;
                        },
                        transformer: (input) => {
                            return `[${input.length}/50]: ${input}`
                        }
                    },

                    {
                        type:"input",
                        name: "remoteName",
                        message: "Enter remote git name",
                        default: "origin" 
                    },
                    {
                        type:"input",
                        name: "branchName",
                        message: "Enter branch name",
                        default: "master"
                    },
                    {
                        type: 'list',
                        name: 'chooseEmoji',
                        message: 'Choose any emoji from below:',
                        choices: emojis
                    }
                ]
            ).then((answers) => {
                try{
                    ( async () => {
                        const {stdout} = await execa('git', ['commit','-m',`${answers.chooseEmoji.split("-")[2]} - ${answers.commitMessage}`]);
                        console.log('\n',chalk.cyan(stdout,'\n'));
                        spinner.start();
                        const {stdoutt} = await execa('git', ['push', '-u', `${answers.remoteName}`, `${answers.branchName}`]);
                        spinner.succeed(chalk.magenta(`Pushed Successfully to ${answers.branchName} branch!!`))   
                    })();
                
                }catch(error){
                    console.log(error);
                }
                        
            })
        })   

    }catch(error){
        console.log(error);
    }
}

module.exports = {
    commitPush
}