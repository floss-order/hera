const swiperproxy = require('../parser/swiperproxy')

function indexController(req, res) {
    res.render('index', { swiperproxy })
}

module.exports = indexController