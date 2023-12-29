const { error } = require('console')
const EXPRESS = require('express')
const router = EXPRESS.Router()

//get all blogs
router.get('/', (req, res) => {
    res.send('this route works')
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
