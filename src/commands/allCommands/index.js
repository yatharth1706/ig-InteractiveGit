// const { ini } = require('./commands/init');
const { add } = require('./commands/add');
const { status } = require('./commands/status');
const { commitPush } = require('./commands/commitPush');
const { remote } = require('./commands/remote');
const { help } = require('./commands/help');


module.exports = {
    add,
    status,
    commitPush,
    remote,
    help
 }
