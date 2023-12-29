const EXPRESS = require('express')
const ERROR = require('../middleware/error')

//routes
const BLOG = require('../routes/blog')

module.exports = function(APP){
    APP.use(EXPRESS.json())
    APP.use('/api/blog', BLOG)
    APP.use(ERROR)
}