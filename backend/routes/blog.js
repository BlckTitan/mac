const { error } = require('console')
const EXPRESS = require('express')
const router = EXPRESS.Router()
const BLOG_MODEL = require('../model/blogModel')

//get all blogs
router.get('/', (req, res) => {
    const BLOG = BLOG_MODEL.find()
    res.send(BLOG)
})

//post to blog
router.post('/', (req, res) => {
    res.send('this route works')
})

//update a blog
router.put('/', (req, res) => {
    res.send('this route works')
})

//delete a blog
router.delete('/', (req, res) => {
    res.send('this route works')
})

module.exports = router
