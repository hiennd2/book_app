const express = require('express')
const router = express.Router()

const home = require('./controller/home.js');
router.get('/', (req, res) => {
    res.send('Home Page')
})
router.get('/user/mail', home.sendMail)

module.exports = router