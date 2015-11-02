var port = require('.')
var test = require('tape')
var net = require('net')

test('range error', function (t) {
  Promise.resolve(port(80))
  .catch(function(err) {
    t.equal(err.name, 'RangeError')
    t.end()
  })
})

test('success story', function (t) {
  Promise.resolve(port(24680))
  .then(function() {
    t.ok(true)
    t.end()
  })
})

test('already in used', function (t) {
  var server = net.createServer()
  server.listen(13579)
  Promise.resolve(port(13579))
  .catch(function(err) {
    t.equal(err.name, 'Error')
    t.equal(err.message, 'localhost:13579 already in use')
    t.end()
  })
  server.close()
})
