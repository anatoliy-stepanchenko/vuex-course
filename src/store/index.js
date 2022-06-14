import { createStore } from "vuex"
import counterModule from "./modules/counter.module"
import employeeModule from "./modules/employee.module"

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    counterModule,
    employeeModule,
  },
  getters: {
    getCounterState(state) {
      return state.counterState.counter
    },
    getEmployeeState(state) {
      return state.employeeState.employeeList
    },
  },
})
