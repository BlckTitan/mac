const MONGOOSE = require('mongoose')
const WINSTON = require('winston')
require('dotenv').config()
require('winston-mongodb')

module.exports = function(){
    //db credentials
    const DB = process.env.db_uri
    // connecting to db
    MONGOOSE.connect(`${DB}`)
    .then(() => WINSTON.info(`Connected to database`))
}