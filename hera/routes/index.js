const express = require('express')
const router = express.Router()
const swiperproxy = require('../parser/swiperproxy')
const path = require('path')

router.get('/', (req, res) => {
    res.render('index', { swiperproxy })
})

router.post('/swiperproxy', (req, res) => {
    swiperproxy.sections().forEach(section => {
        for (let option in swiperproxy._sections[section]) {
            swiperproxy.set(section, option, req.body[option])
        }
    })
    swiperproxy.write(path.join(__dirname, '../proxy.conf'))

    res.redirect('/')
})

module.exports = router