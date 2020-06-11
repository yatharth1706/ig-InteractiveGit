// In this we need to first find out which flag it is 
//check whether any function is available in options or not

function findCommand(cli, options){
    const flags = cli.flags;
    // find out which one is true
    
    const matchedFlag = Object.keys(flags).map((flag) => flags[flag] && flag).filter((flag) => {
        if(options[flag]){
            return options[flag];
        }
    }); 


    return options[matchedFlag] ? options[matchedFlag]() : cli.showHelp();
    
}

module.exports = {
    findCommand
}