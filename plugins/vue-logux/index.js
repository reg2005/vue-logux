/**
 * Created by evgeniy on 16.02.17.
 */
var Client = require('logux-client/client')

export default  {
  install(Vue, credentials, subprotocol, url){
    if (typeof window === 'undefined') return

    const logux = new Client({
      credentials: credentials,
      subprotocol: subprotocol,
      url: url
    })
    logux.sync.connection.connect()
    Vue.prototype.$logux = logux
    Vue.logux = logux
  }
}
