const MONGOOSE = require('mongoose')

const AUTHOR_SCHEMA = new MONGOOSE.Schema({
    name: {
        type:String,
        required: true,
        minlength: 5
    },
    role: {
        type: String,
        required: true,
        default: 'Publisher'
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = AUTHOR_SCHEMA