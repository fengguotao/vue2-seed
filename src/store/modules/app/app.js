import { APP_CONFIG } from './types.js'

const state = {
  pageSideMenuFoldFlag: 0
}

const getters = {}

const mutations = {
  [APP_CONFIG] (state, payload) {
  }
}

const actions = {
  [APP_CONFIG] ({ commit }) {
    commit(APP_CONFIG, { test: 'test' })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
