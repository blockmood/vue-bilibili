<template>
    <div class="space">
        <div class="index_banner">
            <img src="./bannerTop.png" alt="">
            <div class="index__loginField">
                <div class="index_register">
                    <a href="" class="register">注册</a>
                </div>
                <div class="index_login">
                    <a href="javascript:;" @click="login" class="login">登录</a>
                </div>
            </div>
        </div>
        <div class="index_tabs_src">
            <div class="index__tab__src-space-tabs-">
                <p>历史记录</p>
                <div class="index_line_src"></div>
            </div>
        </div>
        <div class="index__history__src-space-history-"> 
            <div class="index__noInfo__src-space-history-">
                <img src="./noContent.png" alt="">
                <p>你还没有历史记录</p>
                <p>快去发现 <a href="">新内容</a> 吧</p>
            </div>
        </div>
        <div class="index__footer__src-space-footer-">
            <div class="index__law__src-space-footer-">
                <p>哔哩哔哩 沪ICP备13002172号-3</p>
                <p>信息网络传播视听节目许可证：0910417</p>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        methods:{
            login(){
                this.$router.push('login')
                this.setHeader(false)
            },
            ...mapMutations({
                setHeader:'SET_HEADER'
            })
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.space
    padding-top:2rem;
    .index_banner
        position: relative;
        width: 100%;
        height: 5.54667rem;
        img
            display: block;
            width: 100%;
        .index__loginField
            position: absolute;
            top: 2.98667rem;
            left: 3.84rem;
            width: 8.32rem;
            height: 1.23733rem;
            .index_register
                position: relative;
                float: left;
                width: 3.072rem;
                height: 100%;
                background-color: #fff;
                border-radius: .17067rem;
                .register
                    display: block;
                    width: 100%;
                    line-height: 1.23733rem;
                    font-size: .59733rem;
                    color: #fb7299;
                    text-align: center;
            .index_login
                position: relative;
                float: right;
                width: 3.072rem;
                height: 100%;
                background-color: #fb7299;
                border-radius: .17067rem;
                .login
                    display: block;
                    width: 100%;
                    line-height: 1.23733rem;
                    font-size: .59733rem;
                    color: #fff;
                    text-align: center;
    .index_tabs_src
        position: relative;
        padding: 0 .512rem;
        background-color: #fff;
        overflow:hidden;
        .index__tab__src-space-tabs-
            position: relative;
            float: left;
            padding-left: .17067rem;
            padding-right: .17067rem;
            margin-right: 1.19467rem;
            p
                font-size: .59733rem;
                line-height: 1.62133rem;
                color: #fb7299;
                text-align: center;
            .index_line_src
                position: absolute;
                left: 0;
                bottom: .08533rem;
                width: 100%;
                height: .08533rem;
                background-color: #fb7299;
                border-radius: .04267rem;
    .index__history__src-space-history-
        position: relative;
        .index__noInfo__src-space-history-
            position: relative;
            padding-top: 3.62667rem;
            img
                display: block;
                position: relative;
                width: 11.94667rem;
                margin: auto;
                margin-bottom: 0;
            p
                font-size: .68267rem;
                color: #999;
                line-height: .85333rem;
                text-align: center;
                a
                    color:#fb7299;
    .index__footer__src-space-footer-
        padding: 1.024rem 0 1.70667rem;
        background: #f3f3f3;
        .index__law__src-space-footer-
            position: relative;
            padding-bottom: 2.39rem;
            p
                font-size: .512rem;
                color: #999;
                line-height: 1.024rem;
                text-align: center;
</style>