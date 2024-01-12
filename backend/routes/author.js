const Joi = require('joi')
const EXPRESS = require('express')
const router = EXPRESS.Router()
const BCRYPT = require('bcrypt')

//MODELS
const AUTHOR_MODEL = require('../model/authorModel')

//get all author
router.get('/', async (req, res) => {
    const AUTHOR = await AUTHOR_MODEL.find()
    .select('name role email phone')
    res.send(AUTHOR)
})

//get author by id
router.get('/me', async (req, res) => {
    const AUTHOR = await AUTHOR_MODEL.findById(req.params.id)
    .select('name role email phone')

    if(!AUTHOR) return res.status(404).send('THE REQUESTED USER WAS NOT FOUND')

    res.send(AUTHOR)
})

//post to author
router.post('/', async (req, res) => {

    const RESULT = validateRequest(req.body)

    if(RESULT.error) return res.status(400).send(RESULT.error.details[0].message)

    const EXISTING_AUTHOR = await AUTHOR_MODEL.findOne({email: req.body.email})
    if(EXISTING_AUTHOR) return res.status(400).send('THIS USER ALREADY EXISTS')

    let newAuthor = new AUTHOR_MODEL({
        name: req.body.name,
        role: req.body.role,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })

    const SALT = await BCRYPT.genSalt(10)
    newAuthor.password = await BCRYPT.hash(newAuthor.password, SALT)

    newAuthor = await newAuthor.save()

    res.send(newAuthor)

})

//update a author
router.put('/:id', async (req, res) => {

    const RESULT = validateRequest(req.body)

    if(RESULT.error) return res.status(400).send(RESULT.error.details[0].message)

    let updatedUser = await AUTHOR_MODEL.findById(req.params.id)

    if(updatedUser){
        updatedUser.set({
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        })
    } else{
        return res.status(404).send('THE REQUESTED AUTHOR WAS NOT FOUND')
    }
    const SALT = await BCRYPT.genSalt(10)
    newAuthor.password = await BCRYPT.hash(newAuthor.password, SALT)
    
    updatedUser = await updatedUser.save()

    res.send(updatedUser)
})

//delete a author
router.delete('/:id', async (req, res) => {

    const AUTHOR = await AUTHOR_MODEL.findByIdAndDelete({_id: req.params.id})

    if(!AUTHOR) return res.status(404).send('THE REQUESTED AUTHOR WAS NOT FOUND')

    res.send(AUTHOR)
})

const validateRequest = (request) => {

    const SCHEMA = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        role: Joi.string(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        password: Joi.string().required(),
        isAdmin: Joi.boolean().required()
    })

    return SCHEMA.validate(request)
}

module.exports = router
