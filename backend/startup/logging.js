const WINSTON = require('winston');
require('winston-mongodb')
require('express-async-errors')

module.exports = function(){
    WINSTON.add(new WINSTON.transports.File({filename: 'logfile.log'}))
    WINSTON.add(new WINSTON.transports.Console({colorize: true, prettyPrint: true}))

}
