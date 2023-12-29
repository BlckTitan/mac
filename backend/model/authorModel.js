const MONGOOSE = require('mongoose')
const AUTHOR_SCHEMA = require('../schema/blogSchema');

const AUTHOR_MODEL = MONGOOSE.model('Author', AUTHOR_SCHEMA);

module.exports = AUTHOR_MODEL