# Port available

Check localhost port availability

## Install

Install with <a href="https://docs.npmjs.com/cli/install" target="_blank">npm</a> directly from the <a href="https://github.com/jeromedecoster/port-available" target="_blank">github repository</a>

```
npm install jeromedecoster/port-available
```

Install from a <a href="https://docs.npmjs.com/files/package.json#github-urls" target="_blank">package.json</a> file

```json
{
  "dependencies": {
    "port-available": "jeromedecoster/port-available"
  }
}
```

## Example

```js
var port = require('port-available')

Promise.resolve(port(3000))
.then(function() {
  // do something on localhost:3000...
})
.catch(function(err) {
  // port already in use...
  console.error(err.message || err)
})
```

## Thanks

Coding tips from <a href="https://github.com/sindresorhus/get-port" target="_blank">get-port</a>

## License

MIT
