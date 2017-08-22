<template>
    <div class="tab">
        <div class="tab-left">
            <div class="left-scroll">
               <router-link class="a" to="/recommend"><p>首页</p></router-link>
               <router-link class="a" to="/channel"><p>动画</p></router-link>
               <router-link class="a" to="/back"><p>番剧</p></router-link>
               <router-link class="a" to="/back"><p>国创</p></router-link>
               <router-link class="a" to="/back"><p>音乐</p></router-link>
               <router-link class="a" to="/back"><p>舞蹈</p></router-link>
               <router-link class="a" to="/back"><p>科技</p></router-link>
               <router-link class="a" to="/back"><p>游戏</p></router-link>
               <router-link class="a" to="/back"><p>娱乐</p></router-link>
               <router-link class="a" to="/back"><p>鬼畜</p></router-link>
               <router-link class="a" to="/back"><p>电影</p></router-link>
               <router-link class="a" to="/back"><p>电视剧</p></router-link>
               <router-link class="a" to="/back"><p>生活</p></router-link>
               <router-link class="a" to="/back"><p>时尚</p></router-link>
               <router-link class="a" to="/back"><p>广告</p></router-link>
               <router-link class="a" to="/back"><p>直播</p></router-link>
            </div>
        </div>
        <div class="tab-right" @click="showtab">
            <img src="./xjt.png" alt="">
        </div>
    </div>
</template>
<script>

    export default{
        data(){
            return {
               
            }
        },
        methods:{
            showtab(){
                this.$emit('showtablist')
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .tab
        position: fixed;
        background-color: #fff;
        width: 100%;
        height: 1.87733rem;
        top: 1.856rem;
        z-index: 5;
        overflow: hidden;
        .tab-left
            position: relative;
            width: 90%;
            padding-top: .256rem;
            overflow: hidden;
            .left-scroll
                position: relative;
                padding-left: 1.024rem;
                overflow-x: scroll;
                overflow-y: hidden;
                height: 1.87733rem;
                white-space: nowrap;
                padding-bottom: .21333rem;
                .a
                    display: inline-block;
                    -webkit-transform: translateZ(0);
                    -webkit-perspective: 1000;
                    background-color: #fff;
                    margin-right: 1.49333rem;
                    p
                        width: 1.36533rem;
                        font-size: .59733rem;
                        line-height: 1.28rem;
                        text-align: center;
                .router-link-active p
                    color: #fb7299;
                    border-bottom: .08533rem solid #fb7299;
        .tab-right
            position: absolute;
            top: 0;
            width: 1.38667rem;
            height: 1.87733rem;
            right: .256rem;
            img
                display:block
                margin:16px auto
</style>