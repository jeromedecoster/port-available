var net = require('net')

module.exports = function(port) {
  return new Promise(function(resolve, reject) {
    if (port < 1024 || port > 65535) reject(new RangeError('port must be beetween 1024 and 65535'))

    var server = net.createServer()
    server.unref()

    server.on('error', function(err) {
      if (err.code == 'EADDRINUSE') reject(new Error(`localhost:${port} already in use`))
      if (err.code == 'EACCES') reject(new Error(`localhost:${port} access denied`))
      reject(err)
    })

    server.listen(port, function() {
      server.close(resolve)
    })
  })
}
