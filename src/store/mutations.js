export default {
  count (state, n) {
    state.lists[ n - 1 ].count += 1
  },
  change (state, n) {
    for (let i = 0; i < 2; i++) {
      state.tabs[i].status = false
    }
    state.tabs[n - 1].status = true
  }
}
