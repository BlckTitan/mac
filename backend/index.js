const EXPRESS = require('express')
const APP = EXPRESS()
const WINSTON = require('winston')
require('dotenv').config()
require('winston-mongodb')


//error logging
require('./startup/logging')()
//routing
require('./startup/route')(APP)
require('./startup/db')()

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => WINSTON.info(`listening on ${PORT}`))