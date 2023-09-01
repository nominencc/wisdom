import Router from 'vue-router'
import Vue from 'vue';
import WisdomFarm from "@/views/farm/WisdomFarm.vue"

Vue.use(Router)

const routes = [
  {
    path: '/farm',
    component: WisdomFarm
  },
  {
    path: '/',
    redirect:'/farm'
  }
 
]

export default new Router({
  routes
})
