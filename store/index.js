import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
// import logux from '~plugins/logux-client'
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex)

const defaultState = {
  button: null,
  mousePosition: null,
  form: {
    firstName: '',
    lastName: ''
  }
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    i18n: vuexI18n.store
  },
})


Vue.use(vuexI18n.plugin, store);

import translationEn from './lang/en'
import translationRu from './lang/ru'

Vue.i18n.add('en', translationEn)
Vue.i18n.add('ru', translationRu)

export default store
