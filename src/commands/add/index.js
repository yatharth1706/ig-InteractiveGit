const execa = require('execa');

function add() {
    try{
        (
            async () => {
                const {stdout} = execa('git', ['add', '.'], {
                    stdout: "inherit"
                })

                console.log("Added!!");
            }
        )();
    }catch(error){
        console.log(error);
    } 
}

module.exports = {
    add
}