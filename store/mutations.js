export const setButton = (state, payload) => {
  state.button = payload
}

export const setMousePosition = (state, payload) => {
  state.mousePosition = payload
}

export const setFirstName= (state, payload) => {
  state.form.firstName = payload
}

export const setLastName = (state, payload) => {
  state.form.lastName = payload
}
