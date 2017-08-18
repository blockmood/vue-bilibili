<template>
  <div id="app">
      <my-header></my-header>
      <transition name="tablist">
          <show-tab v-show="show" @notablist="notablist"></show-tab>
      </transition>
      <tab @showtablist="showtablist"></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

import MyHeader from 'components/my-header/my-header'
import Tab from 'components/tab/tab'
import ShowTab from 'components/showtab/showtab'
export default {
    data(){
      return {
        show:false
      }
    },
    methods:{
      showtablist(){
       this.show = !this.show
      },
      notablist(){
       this.show = !this.show
      }
    },
  	components:{
  		MyHeader,
      Tab,
      ShowTab
  	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tablist-enter-active,.tablist-leave-active
    transition:all 0.3s
  .tablist-enter,.tablist-leave-to
    transform:translate3d(0,-100%,0)
</style>
