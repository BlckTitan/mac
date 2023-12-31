const EXPRESS = require('express')
const ERROR = require('../middleware/error')

//routes
const BLOG = require('../routes/blog')
const AUTHOR = require('../routes/author')
const AUTH = require('../routes/auth')

module.exports = function(APP){
    APP.use(EXPRESS.json())
    APP.use('/api/blog', BLOG)
    APP.use('/api/author', AUTHOR)
    APP.use('/api/auth', AUTH)
    APP.use(ERROR)
}