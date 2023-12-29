const WINSTON = require('winston')

function error(err, req, res, next){
    WINSTON.error(err.message, err)
    res.status(500).send(`An error occured, ${err.message}`)
}

module.exports = error