let fs = require('fs');
const format = require('node.date-time');

function logTime(){
    return new Date().format("y-M-d H:M:S") + '';
}

fs.appendFile('readme.log', logTime() +'time of logging'+'\n');