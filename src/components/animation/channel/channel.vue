<template>
    <div class="channel">
        <transition name="nav">
            <navigation v-show="show"></navigation>
        </transition>
        <router-view></router-view>
    </div>
</template>
<script>
    import navigation from '../navigation/navigation'


    export default{
        data(){
            return{
                show:true
            }
        },
        mounted(){
            window.addEventListener('scroll',()=>{
                
            })
        },
        components:{
            navigation
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .nav-enter-active,.nav-leave-active
        transition:all 0.3s
    .nav-enter,.nav-leave-to
        transform:translate3d(0,-100%,0)
</style>