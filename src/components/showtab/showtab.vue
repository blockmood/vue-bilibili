<template>
    <div class="showtab">
        <div class="tab-list">
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
            <router-link class="a dsj" to="/back"><p>电视剧</p></router-link>
            <router-link class="a" to="/back"><p>生活</p></router-link>
            <router-link class="a" to="/back"><p>时尚</p></router-link>
            <router-link class="a" to="/back"><p>广告</p></router-link>

        </div>
        <div class="tab-btn" @click="notablist">
            <img src="./xlk.png" alt="">
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
            notablist(){
                this.$emit('notablist')
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .showtab
        position: fixed;
        background-color: #fff;
        top: 1.87733rem;
        z-index: 6;
        padding-left: .34133rem;
        padding-right: .29867rem;
        overflow: hidden;
        .tab-list
            position: relative;
            width: 100%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            .a
                position: relative;
                display: block;
                padding-top: .256rem;
                padding-bottom: .256rem;
                margin-left: 0.59733rem;
                margin-right: 0.59733rem;
                background-color: #fff;
                p
                        width: 1.36533rem;
                        font-size: .59733rem;
                        line-height: 1.28rem;
                        text-align: center;
            .dsj
                margin: 0 .29867rem;
                p
                    width:1.96267rem
            .router-link-active p
                    color: #fb7299;
                    border-bottom: .08533rem solid #fb7299;
        .tab-btn
            padding:11px 0;
            img
                display:block;
                margin:0 auto

</style>