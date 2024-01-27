const EXPRESS = require('express')
const router = EXPRESS.Router()
const MONGOOSE = require('mongoose')
const Fawn = require('fawn')
const Joi = require('joi')
const WINSTON = require('winston')
//models
const BLOG_MODEL = require('../model/blogModel')
const AUTHOR_MODEL = require('../model/authorModel')
//middleware
const AUTH = require('../middleware/auth')
const ADMIN = require('../middleware/admin')

// Fawn.init(MONGOOSE)

//get all blogs
router.get('/', async (req, res) => {
    const BLOG = await BLOG_MODEL.find()
    .select('blog author')
    .sort({dateCreated: -1})

    res.send(BLOG)
})

// //get all blogs
// router.get('/',  async (req, res) => {
//     const BLOG = await BLOG_MODEL.findById(req.author._id)
//     .select('blog author')
//     .sort({dateCreated: -1})

//     res.send(BLOG)
// })

const validateRequest = (request) => {

    const SCHEMA = Joi.object({
        // name: Joi.string().min(5).max(50).required(),
        title: Joi.string().min(5).max(50).required(),
        description: Joi.string().required(),
        tags: Joi.string().min(5),
        feature: Joi.string().min(5)
    })

    return SCHEMA.validate(request)
}

module.exports = router