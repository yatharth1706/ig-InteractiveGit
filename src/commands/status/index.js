const execa = require('execa');
const chalk = require('chalk');
const parseGitStatus = require('parse-git-status');

function status() {
    try{
        (
            async () => {
                const {stdout} = await execa('git', ['status', '--porcelain']);
                const output = parseGitStatus(stdout);
                console.log(output[0]['to']);
                console.log(parseGitStatus.describeCode('MM'));
            }
        )();
    }catch(error){
        console.log(chalk.red(error));
    }
    
}

module.exports = {
    status
}