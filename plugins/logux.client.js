import Vue from 'vue'
import VueLogux from './vue-logux'

Vue.use(VueLogux,
  process.env.loguxToken,
  process.env.loguxSubprotocol,
  process.env.loguxUrl
)
