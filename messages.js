var Router = require('express').Router
var messageStorage = {}


checkMsgMw = function (req, res, next) {
  if (req.params.id in messageStorage)
    return next()

  res.status(404).send('Message not found')
}

returnMsgMw = function(req, res, next) {
  res.status(200).send({
    message: messageStorage[req.params.id],
    _link: 'http://localhost:3000/messages/' + req.params.id
  })
}


module.exports = Router()

module.exports.get('/:id', checkMsgMw, returnMsgMw)

module.exports.put('/:id', function(req, res, next) {
  messageStorage[req.params.id] = req.body.message
  next()
}, returnMsgMw)

module.exports.delete('/:id', checkMsgMw, function(req, res, next) {
  delete messageStorage[req.params.id]
  res.sendStatus(204)
})
