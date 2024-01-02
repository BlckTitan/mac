const JWT = require('jsonwebtoken')
require('dotenv').config()

function auth(req, res, next){
    const TOKEN = req.header('x-auth-token');
    if(!TOKEN) return res.status(403).send('ACCESS DENIED. NO TOKEN PROVIDED')

    try {
        const DECODED = JWT.verify(TOKEN, process.env.auth_key)
        req.author = DECODED;
        next()
    } catch (err) {
        res.status(400).send('INVALID TOKEN')
    }
}

module.exports = auth