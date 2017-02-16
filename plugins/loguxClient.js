/**
 * Created by evgeniy on 16.02.17.
 */
var Client = require('logux-client/client')
import {Log, createTimer, MemoryStore} from 'logux-core'
// import VuexForLogux from './logux/vuexForLogux'
import store from './../store'

var logux

if (typeof window != 'undefined') {

  const timer = createTimer('server')

  logux = new Client({
    credentials: process.env.loguxToken,
    subprotocol: process.env.loguxSubprotocol,
    url: process.env.loguxUrl,
    // store: new Log({
    //   store: VuexForLogux,
    //   timer
    // })
  })

  logux.sync.connection.connect()

  logux.sync.on('state', function () {
    console.log(
      logux.sync.connected ? 'logux-online' : 'logux-offline'
    )
    // if (logux.sync.connected) {
    //   favicon.href = '/favicon.ico'
    //   notice.classList.add('.offline-notice_hidden')
    // } else {
    //   favicon.href = '/offline.ico'
    //   notice.classList.remove('.offline-notice_hidden')
    // }
  })

  logux.log.on('event', function (event, meta) {
    console.log(event)
    store.commit(event.type, event.payload)
  })
  var count
  logux.log.keep((event, meta) => {
    count += 1
    return count > 10
  })
  document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
  var tempX = 0
  var tempY = 0
  var IE = false
// Main function to retrieve mouse x-y pos.s

  function getMouseXY(e) {
    if (IE) { // grab the x-y pos.s if browser is IE
      tempX = event.clientX + document.body.scrollLeft
      tempY = event.clientY + document.body.scrollTop
    } else {  // grab the x-y pos.s if browser is NS
      tempX = e.pageX
      tempY = e.pageY
    }
    // catch possible negative values in NS4
    if (tempX < 0) {
      tempX = 0
    }
    if (tempY < 0) {
      tempY = 0
    }
    // show the position values in the form named Show
    // in the text fields named MouseX and MouseY
    store.dispatch('setMousePosition', {x: tempX, y: tempY})
  }

}


export default logux
