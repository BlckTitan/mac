
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
        password: req.body.password
    })

    const SALT = await BCRYPT.genSalt(10)
    newAuthor.password = await BCRYPT.hash(newAuthor.password, SALT)

    newAuthor = await newAuthor.save()

    res.send(newAuthor)

    const TOKEN = newAuthor.generateAuthToken()
})