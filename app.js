const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const handlebars = require('hbs')

// page routers
const indexRouter = require('./app_server/routes/index')
const travelRouter = require('./app_server/routes/travel')
const roomsRouter = require('./app_server/routes/rooms')
const mealsRouter = require('./app_server/routes/meals')
const aboutRouter = require('./app_server/routes/about')
const newsRouter = require('./app_server/routes/news')
const contactRouter = require('./app_server/routes/contact')

// api routers
const apiRouter = require('./app_api/routes/index')

// connect to the db
require('./app_api/models/db')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'))
app.set('view engine', 'hbs')

// register handlebars partials
handlebars.registerPartials(__dirname + '/app_server/views/partials')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// enable CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

// register the routers
app.use('/', indexRouter)
app.use('/travel', travelRouter)
app.use('/rooms', roomsRouter)
app.use('/meals', mealsRouter)
app.use('/news', newsRouter)
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
