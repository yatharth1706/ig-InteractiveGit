const execa = require('execa');

function init() {
    try{
        (
            async () => {
                const {stdout} = await execa('git', ['init'], {
                    stdout: 'inherit'
                });
            }
        )();
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    init
}