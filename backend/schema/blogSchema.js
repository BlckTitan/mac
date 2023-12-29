const MONGOOSE = require('mongoose')

const BLOG_SCHEMA = new MONGOOSE.Schema({
    blog: {
        type: new MONGOOSE.Schema({
            title: {
                type:String,
                required: true,
                minlength: 5
            },
            description: {
                type:String,
                require: true,
                minlength: 5
            },
            tags: {
                type:String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            feature: {
                type:String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            dateCreated: {
                type: Date,
                default: Date.now,
                required: true
            },
            dateUpdated: {
                type: Date,
                default: Date.now,
            }
        })
    },
    author: {
        type: new MONGOOSE.Schema({
            name: {
                type:String,
                required: true,
                minlength: 5
            },
        })
    }
})

module.exports = BLOG_SCHEMA