var express = require('express')
var bodyParser = require('body-parser')


var app = express()

// Payload parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Basic request logger
app.use(function(req, res, next) {
  console.log('%s  %s %s', new Date().toISOString(), req.method, req.url)
  next()
})

app.use('/messages', require('./messages'))


app.listen(3000, function(err) {
  if (err)
    return console.error(err)

  console.log('Listening on 0.0.0.0:3000')
})
