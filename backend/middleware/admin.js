
function admin(req, res, next){
    if(!req.author.isAdmin) return res.status(403).send('ACCESS DENIED')

    next()
}

module.exports = admin