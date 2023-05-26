// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Login.vue'

Vue.use(VueRouter)

// const isuserLogin = false

const routes = [{
    path: '/login',
    name: 'home',
    component: HomeView
  }, {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')
  },
{
  path:'/Nursery',
  name:'Nursery',
  component: () => import('../views/HomeVue.vue')
},
  {
    path: '/register',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

// router.beforeEach((to,from,next) =>{
//   if(to.meta.needAuth){
//     if(isuserLogin){
//       next()
//     }
//     else{
//       next("/login")
//     }
//   }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // router
})

export default router