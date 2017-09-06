<template>
    <div class="index_footer">
        <div class="index_optionWrap">
            <a href="javascript:;" class="index_optionLink">
                <i class="index_pc"></i>
                <span class="index_pc_txt">电脑版</span>
            </a>
            <a href="javascript:;" class="index_optionLink">
                <i class="index_mobel_pc"></i>
                <span class="index_pc_txt">客户端</span>
            </a>
            <a href="javascript:;" class="index_optionLink" @click="top">
                <i class="index_top_pc"></i>
                <span class="index_pc_txt">返回顶部</span>
            </a>
        </div>
        <p class="index_footer_info">沪ICP备13002172号-3 bilibili.com © 2009-2017</p>
    </div>
</template>
<script>
    export default{
        methods:{
            top(){
                console.log(document.documentElement.scrollTop)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .index_footer
        padding: 1.344rem 0 1.17333rem;
        background: #f3f3f3;
        .index_footer_info
            margin-top: 1.19467rem;
            font-size: .512rem;
            text-align: center;
            color: #999;
        .index_optionWrap
            overflow:hidden;
            .index_optionLink
                float: left;
                height: 1rem;
                border-right: .02133rem solid #ccc;
                box-sizing: border-box;
                width: 33%;
                text-align: center;
                .index_pc
                    display: inline-block;
                    margin-right: .42667rem;
                    vertical-align: middle;
                    background: url(./ui_2.png) no-repeat;
                    background-size: 15.36rem 46.72rem;
                    overflow: hidden;
                    width: .59733rem;
                    height: .53333rem;
                    background-position: -8.14933rem -.512rem;
                .index_mobel_pc
                    display: inline-block;
                    margin-right: .42667rem;
                    vertical-align: middle;
                    background: url(./ui_2.png) no-repeat;
                    background-size: 15.36rem 46.72rem;
                    overflow: hidden;
                    width: .42667rem;
                    height: .64rem;
                    background-position: -8.23467rem -2.368rem;
                .index_top_pc
                    display: inline-block;
                    margin-right: .42667rem;
                    vertical-align: middle;
                    background: url(./ui_2.png) no-repeat;
                    background-size: 15.36rem 46.72rem;
                    overflow: hidden;
                    width: .53333rem;
                    height: .55467rem;
                    background-position: -8.192rem -4.33067rem;
                .index_pc_txt
                    font-size: .512rem;
                    line-height: .68267rem;
                    vertical-align: middle;

</style>