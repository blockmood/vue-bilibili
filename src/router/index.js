import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Channel from 'components/channel/channel'
import Focus from 'components/focus/focus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:Recommend,
    },
    {
      path:'/channel',
      component:Channel,
    },
    {
      path:'/focus',
      component:Focus
    }
  ]
})
