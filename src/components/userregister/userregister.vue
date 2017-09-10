<template>
    <div class="register-app">
        <header>
            <a href="javascript:;" class="logo"  @click="back"></a>
            <a class="loginText">注册</a>
        </header>
        <div class="from">
                <ul>
                    <li class="item">
                        <div class="input-wrp">
                            <input type="text" name="uname" id="uname" autocomplete="off" placeholder="您的昵称, 例：哔哩哔哩">
                        </div>
                    </li>
                    <li class="item">
                        <div class="input-wrp">
                            <input type="password" name="userpwd" id="userpwd" autocomplete="off" placeholder="您的密码, 6-16个字符组成，区分大小写">
                        </div>
                    </li>
                     <li class="item">
                        <div class="input-wrp">
                            <input type="password" name="userpwd" id="userpwd" autocomplete="off" placeholder="确认密码, 6-16个字符组成，区分大小写">
                        </div>
                    </li>
                    <li class="sns-tip"></li>
                    <li class="btn-button">
                        <a href="javascript:;" class="loginbtn">立即注册</a>
                        <router-link to='login'>登录</router-link>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default{
        methods:{
            back(){
                this.$router.push('recommend')
                this.setHeader(true)
                this.setTab(true)
            },
            ...mapMutations({
                setHeader:'SET_HEADER',
                setTab:'SET_TAB'
            })
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .register-app
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:#f5f5f5;
        header
            height: 38px;
            line-height: 48px;
            border: 1px solid #ddd;
            background: #fff;
            padding: 14px 15px 12px;
            .logo
                display: block;
                width: 63px;
                height: 28.8px;
                float: left;
                margin-top: 3px;
                margin-right: 12px;
                background: url(./logo-mobile.png);
                background-size: 63px 28.8px;
            .loginText
                height: 42px;
                border-left: 2px solid #de698c;
                color: #de698c;
                font-weight: 700;
                padding: 17px 0 0 15px;
                font-size: .6em;
        .from
            padding: 15px;
            ul
                .sns-tip
                    height: 20px;
                    padding: 0 0 20px 2px;
                    color: #de698c;
                .btn-button
                    a
                        display: block;
                        border: 1px solid #00a1d6;
                        text-align: center;
                        box-sizing: border-box;
                        width: 100%;
                        border-radius: 32px;
                        padding: 12px;
                        margin-bottom: 10px;
                        color: #00a1d6;
                        background: #fff;
                    .loginbtn
                        background:#00a1d6;
                        color:#fff;
                font-size: .6em;
                .input-wrp
                    border-radius: 6px;
                    margin-bottom: 10px;
                    background: #fff;
                    width: 100%;
                    border: 1px solid #ddd;
                    height: 45px;
                    line-height: 45px;
                    overflow: hidden;
                    box-sizing: border-box;
                    position: relative;
                    input
                        border-radius: 6px;
                        width: 100%;
                        box-sizing: border-box;
                        font-size: 1em;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        padding: 10px;
                        border: 0;
                .text
                    p
                        padding: 0 0 8px 2px;
                        color: #de698c;
                        float:left;
                    .forget-password
                        float: right;
                        padding: 0 0 15px 2px;
                        color: #00a1d6;
                        text-decoration: none;
                        cursor: pointer;
</style>