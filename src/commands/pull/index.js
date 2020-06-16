const execa = require('execa');
const chalk = require('chalk');

function pull(){
    (
        async () => {
            const {stdout} = execa('git', ['pull'], {
                stdout: 'inherit'
            })
        }
    )();
}

module.exports = {
    pull
}