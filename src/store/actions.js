export default {
  count ({ commit }, n) {
    commit('count', n)
  },
  change ({ commit }, n) {
    commit('change', n)
  }
}
