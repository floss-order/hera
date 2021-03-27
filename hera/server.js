const path = require('path')
const express = require('express')
const app = express()

//Server config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
	limit: '1mb', 
	extended: false
}))

//Routes list
const indexRouter = require('./routes/index.js')
app.use('/', indexRouter)

//Server startup
app.listen(process.env.PORT || 3000)
