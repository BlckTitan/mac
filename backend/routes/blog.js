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

//get blog by id
router.get('/:id', async (req, res) => {
    const BLOG = await BLOG_MODEL.findById(req.params.id)
    .select('blog author')

    if(!BLOG) return res.status(404).send('THE REQUESTED BLOG WAS NOT FOUND')

    res.send(BLOG)
})

//post to blog
router.post('/', [AUTH], async (req, res) => {

    const RESULT = validateRequest(req.body)

    if(RESULT.error) return res.status(400).send(RESULT.error.details[0].message)

    const AUTHOR = await AUTHOR_MODEL.findById({_id: '659139dafe1ef0bc2027806b'})

    if(!AUTHOR) return res.status(404).send('INVALID AUTHOR')



    let newBlog = new BLOG_MODEL({
        blog: {
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            feature: req.body.feature
        },
        author: {
            _id: AUTHOR._id,
            name: AUTHOR.name
        }
    })

    newBlog = await newBlog.save()

    res.send(newBlog)
})

//update a blog
router.put('/:id', [AUTH], async (req, res) => {

    const RESULT = validateRequest(req.body)

    if(RESULT.error) return res.status(400).send(RESULT.error.details[0].message)

    const AUTHOR = await AUTHOR_MODEL.findById({_id: '658ed94802d0ff65a7f6f30a'})

    let updatedBlog = await BLOG_MODEL.findById(req.params.id)

    if(updatedBlog){
        updatedBlog.set({
            blog: {
                title: req.body.title,
                description: req.body.description,
                tags: req.body.tags,
                feature: req.body.feature
            },
            author: {
                _id: AUTHOR._id,
                name: AUTHOR.name
            },
            dateUpdated: new Date()
        })
    } else{
        return res.status(404).send('THE REQUESTED BLOG WAS NOT FOUND')
    }

    updatedBlog = await updatedBlog.save()

    res.send(updatedBlog)
})

//delete a blog
router.delete('/:id', [AUTH, ADMIN], async (req, res) => {

    const BLOG = await BLOG_MODEL.findByIdAndDelete({_id: req.params.id})

    if(!BLOG) return res.status(404).send('THE REQUESTED BLOG WAS NOT FOUND')

    res.send(BLOG)
})

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