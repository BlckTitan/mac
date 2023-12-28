const EXPRESS = require('express')
const APP = EXPRESS()
const WINSTON = require('winston')
require('dotenv').config()

//routeing
require('./startup/route')(APP)

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => WINSTON.info(`listening on ${PORT}`))