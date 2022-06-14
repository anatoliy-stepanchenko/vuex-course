import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
// import Counter from "@/components/Counter"
// import Employees from "@/components/Employees"
import UserList from "@/components/UserList"
import VuexCounter from "@/components/vuex/VuexCounter"
import VuexEmployees from "@/components/vuex/VuexEmployees"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: VuexCounter,
  },
  {
    path: "/employees",
    name: "Employees",
    component: VuexEmployees,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
