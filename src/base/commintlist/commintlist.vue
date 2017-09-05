<template>
    <div class="comment">
        <h3>评论</h3>
        <div class="index_commentWrap" v-for="(list,index) in commintList" v-if="index < array.length">
            <div class="index_commentItem">
                <a href="" class="index_imgWrap">
                    <img class="toux" :src="list.member.avatar" alt="">
                </a>
                <a href="" class="index_upName">{{list.member.uname}}</a>
                <span class="index_commentTime">1天前</span>
                <p class="index_commentTxt">
                    {{list.content.message}}
                </p>
            </div>
        </div>
        <span class="downLoad">下载bilibili客户端，查看全部评论</span>
    </div>
</template>
<script>
    export default{
        props:{
            commintList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                array:[]
            }
        },
        created(){
            this.array = new Array(7)
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .comment
        padding-top: 1.024rem;
        background-color: #f3f3f3;
        h3
            margin-bottom: .08533rem;
            margin-left: .512rem;
            font-size: .64rem;
            font-weight: 400;
        .downLoad
            display: block;
            margin: .128rem .512rem 0;
            height: 1.536rem;
            line-height: 1.536rem;
            font-size: .55467rem;
            color: #fff;
            background-color: #fb7299;
            border-radius: .128rem;
            text-align: center;
        .index_commentWrap
            padding: 0 .512rem;
            .index_commentItem
                position: relative;
                padding: .768rem 0 .66133rem 2.13333rem;
                min-height: 1.70667rem;
                border-top: .02133rem solid #ccc;
                overflow: hidden;
            .index_commentItem:first-child
                border-top: none;
                .index_imgWrap
                    position: absolute;
                    width: 1.70667rem;
                    height: 1.70667rem;
                    top: .768rem;
                    left: 0;
                    border-radius: 50%;
                    overflow: hidden;
                    .toux
                        width: 100%;
                        height: 100%;
                .index_upName
                    display: block;
                    max-width: 60%;
                    margin-bottom: .512rem;
                    color: #757575;
                    font-size: .55467rem;
                .index_commentTime
                    position: absolute;
                    top: .81067rem;
                    right: 0;
                    font-size: .46933rem;
                    color: #999;
                .index_commentTxt
                    color: #212121;
                    line-height: .81067rem;
                    font-size: .59733rem;
</style>  