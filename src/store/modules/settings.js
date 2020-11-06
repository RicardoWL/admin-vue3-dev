const state = {
  collapse: false,
  device: 'desktop',
}

const getters = {
  collapse: (state) => state.collapse,
  device: (state) => state.device,
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.collapse = !state.collapse
  },
  CLOSE_SIDEBAR: (state) => {
    state.collapse = false
  },
  OPEN_SIDEBAR: (state) => {
    state.collapse = true
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
}

const actions = {
  toggleCollapse({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
  openSideBar({ commit }) {
    commit('OPEN_SIDEBAR')
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
}

export default { state, getters, mutations, actions }
