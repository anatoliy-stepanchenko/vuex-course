export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
    },
  },
  mutations: {
    INC_COUNT(state) {
      state.counter.count += 1
    },
    DECR_COUNT(state) {
      state.counter.count -= 1
    },
    INC_COUNT_BY(state, payload) {
      state.counter.count += payload.value
    },
  },
  actions: {
    incrementCounter({ commit }) {
      return commit("INC_COUNT")
    },
    decrementCounter({ commit }) {
      return commit("DECR_COUNT")
    },
    incrementCounterBy({ commit }, payload) {
      return commit("INC_COUNT_BY", payload)
    },
  },
}
