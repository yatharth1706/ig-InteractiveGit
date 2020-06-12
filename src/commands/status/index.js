const execa = require('execa');
const chalk = require('chalk');
const parseGitStatus = require('parse-git-status');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'statusType',
        message: 'Choose Type of Status',
        choices: ['short','long','porcelain v1','porcelain v2']
    }
]

function status() {
    inquirer.prompt(questions).then((answers) => {
        
        let flag = "";
        if(answers.statusType == 'short'){
            flag = '-s';
        }else if(answers.statusType == 'long'){
            flag = '--long';
        }else if(answers.statusType == 'porcelain v1'){
            flag = '--porcelain=v1';
        }else if(answers.statusType == 'porcelain v2'){
            flag = '--porcelain=v2';
        }

        try{
            (
                async () => {
                    const {stdout} = await execa('git', ['status', flag], {
                        stdio: 'inherit'
                    });
                    
                }
            )();
        }catch(error){
            console.log(chalk.red(error));
        }

    })
    
    
}

module.exports = {
    status
}