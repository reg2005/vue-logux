import axios from '~plugins/axios'
import Vue from 'vue'

export const nuxtServerInit = ({ commit }, { req, route }) => {
    Vue.i18n.set(route.params.lang)
}

export const getAllState = ({commit, state}) => {

    return axios.get('get.all.state').then((response) => {
        let data = response.data
        commit('setUser', data.user)
        commit('setLastEvent', data.lastEvent)
        commit('setSlider', data.slider)
        commit('setGallery', data.gallery)
        commit('setCategories', data.categories)
    }).catch((error) => {
        // console.log(error)
    })
}

export const setButton = ({commit}, payload) => {
  commit('setButton', payload)
  console.log(Vue.logux)
  Vue.logux.log.add({
    type: 'setButton',
    payload: payload
  })
}

export const setFirstName = ({commit}, payload) => {
  commit('setFirstName', payload)
  Vue.logux.log.add({
    type: 'setFirstName',
    payload: payload
  })
}

export const setLastName = ({commit}, payload) => {
  commit('setLastName', payload)
  Vue.logux.log.add({
    type: 'setLastName',
    payload: payload
  })
}



export const setMousePosition = ({commit}, payload) => {
  commit('setMousePosition', payload)
  Vue.logux.log.add({
    type: 'setMousePosition',
    payload: payload
  })
}
export const addLoguxHistory = ({commit}, payload) => {
  commit('pushToLoguxHistory', payload)
  return false
}
export const decrement = ({commit}) => commit('DECREMENT')
