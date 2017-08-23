import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Channel from 'components/animation/channel/channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/channel',
      component:Channel,
    }
  ]
})
