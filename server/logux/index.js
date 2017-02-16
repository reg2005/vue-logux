/**
 * Created by evgeniy on 16.02.17.
 */
const cleanEvery = require('logux-core').cleanEvery
const Server = require('logux-server').Server
const app = new Server({
  subprotocol: '1.0.0',
  supports: '1.x',
  root: __dirname
})
//
app.auth(token => {
  return new Promise(function (response, reject) {
    response(true)
  })
  // TODO Return user by token or false on bad token.
})
//
app.log.on('event', (event, meta) => {
  console.log(event, meta)
  // TODO Do something on client event. Write to database, ask other service.
})
//
cleanEvery(app.log, 10)
app.log.keep((event, meta) => {
  // TODO return true if event should not be removed yet from log
})

// if (app.env === 'production') {
//   app.listen({ cert: 'cert.pem', key: 'key.pem' })
// } else {
  app.listen()
// }
