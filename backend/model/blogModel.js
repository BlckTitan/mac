const MONGOOSE = require('mongoose')
const BLOG_SCHEMA = require('../schema/blogSchema');

const BLOG_MODEL = MONGOOSE.model('Blog', BLOG_SCHEMA);

module.exports = BLOG_MODEL