import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Channel from 'components/channel/channel'
import Play from 'components/play/play'
import Space from 'components/space/space'
import UserLogin from 'components/userlogin/userlogin'

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
      path:'/play',
      component:Play
    },
    {
      path:'/space',
      component:Space
    },{
      path:'/login',
      component:UserLogin
    }
  ]
})
