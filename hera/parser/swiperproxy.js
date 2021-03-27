const ConfigParser = require('configparser')
const path = require('path')

const config = new ConfigParser()
config.read(path.join(__dirname,'../proxy.conf'))

module.exports = config