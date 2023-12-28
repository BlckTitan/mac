const EXPRESS = require('express')

//routes
const BLOG = require('../routes/blog')

module.exports = function(APP){
    APP.use(EXPRESS.json())
    APP.use('/api/blog', BLOG)
    // APP.use(ERROR)
}