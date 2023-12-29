const MONGOOSE = require('mongoose')
const AUTHOR_SCHEMA = require('../schema/authorSchema');

const AUTHOR_MODEL = MONGOOSE.model('Author', AUTHOR_SCHEMA);

module.exports = AUTHOR_MODEL