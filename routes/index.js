const express = require('express')
const router = express.Router()
const path = require('path')
const User = require(path.resolve(__dirname, '../lib/User'))

router.get('/', (req, res, next) => {
    res.render('layouts/index', { title: 'Test' })
})

router.get('/register', (req, res, next) => {
    res.render('layouts/register')
})

router.post('/register', (req, res) => {
    // const _User = new User()

    // _User.username = req.body.username
    // _User.password = req.body.password

    // _User.save((err, usr) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(500).send()
    //     }

    //     return res.status(200).send()
    // })

    console.log(req.body, req.body.code)
    res.sendStatus(200)
})

module.exports = router