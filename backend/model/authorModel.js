const MONGOOSE = require('mongoose')
const JWT = require('jsonwebtoken')
require('dotenv').config()

//schema
const AUTHOR_SCHEMA = require('../schema/authorSchema');

AUTHOR_SCHEMA.methods.generateAuthToken = function(){
    const TOKEN = JWT.sign({_id: this._id, isAdmin: this.isAdmin}, process.env.auth_key)
    return TOKEN
}

const AUTHOR_MODEL = MONGOOSE.model('Author', AUTHOR_SCHEMA);

module.exports = AUTHOR_MODEL