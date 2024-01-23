const Joi = require('joi')
const EXPRESS = require('express')
const router = EXPRESS.Router()
const BCRYPT = require('bcrypt')

//MODELS
const AUTHOR_MODEL = require('../model/authorModel')

//post to author
router.post('/', async (req, res) => {

    const RESULT = validateRequest(req.body)

    if(RESULT.error) return res.status(400).send(RESULT.error.details[0].message)

    const EXISTING_AUTHOR = await AUTHOR_MODEL.findOne({email: req.body.email})
    if(!EXISTING_AUTHOR) return res.status(400).send('INVALID EMAIL OR PASSWORD')

    const EXISTING_PASSWORD = await BCRYPT.compare(req.body.password, EXISTING_AUTHOR.password)
    if(!EXISTING_PASSWORD) return res.status(400).send('INVALID EMAIL OR PASSWORD')

    const TOKEN = EXISTING_AUTHOR.generateAuthToken()
 

    res.header('x-auth-token', TOKEN).send(EXISTING_AUTHOR)
})

const validateRequest = (request) => {

    const SCHEMA = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    return SCHEMA.validate(request)
}

module.exports = router