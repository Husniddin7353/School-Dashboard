import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
    return import('../views/About.vue')
    }
  },
  {
    path: '/employees',
    name: 'Employees',
    component: function () {
      return import('../views/Employees.vue')
    }

  },
  {
    path: '/AddEmployee',
    name: 'AddEmployee',
    component: function () {
      return import('../views/AddEmployee.vue')
    }

  },
  // {
  //   path: '/employees/:index/EditEmployee',
  //   name: 'EditEmployee',
  //   component: function () {
  //     return import('../views/EditEmployee.vue')
  //   }

  // },

  {
    path: "/AddEmployee/:index",
    name: "AddEmployee",
    component: () => import("../views/AddEmployee.vue"),
  },

  {
    path: "/employees/:index/EditEmployee",
    name: "EditEmployee",
    component: () => import("../views/EditEmployee.vue"),
  },

  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
