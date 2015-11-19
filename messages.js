var Router = require('express').Router

module.exports = Router()

var messages = []
var id = 1


checkMsgMw = function (req, res, next) {
  if (req.params.id in messages)
    return next()

  res.status(404).send('Message not found')
}

returnMsgMw = function(req, res, next) {
  return res.send({
    message: messages[req.params.id],
    _link: 'http://localhost:3000/messages/' + req.params.id
  })
}


module.exports.get('/:id', checkMsgMw, returnMsgMw)

module.exports.put('/', function(req, res, next) {
  req.params.id = id++
  messages[req.params.id] = req.body.message
  next()
}, returnMsgMw)

module.exports.delete('/:id', checkMsgMw, function(req, res, next) {
  delete messages[req.params.id]
  res.sendStatus(204)
})
