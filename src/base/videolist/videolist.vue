<template>
    <div class="videolistbox">
        <h3>视频相关</h3>
        <div class="list-box">
            <a href="javascript:;" @click="onPlayer(item)" class="item" v-for="(item,index) in getData()" v-if="index < dat.length">
                <span class="img_wrap">
                    <img :src="item.pic" alt="">
                </span>
                <div>
                    <span class="index_titlx">{{item.title}}</span>
                    <span class="index_upName">UP主：{{item.owner.name}}</span>
                </div>
                <div class="index_infowrap_s">
                    <span class="index_num">播放：{{_getPlay(item.stat.view)}}</span>
                    <span class="index_view">弹幕:{{_getPlay(item.stat.danmaku)}}</span>
                </div>
            </a>
        </div>
        <div class="index__loadMore" v-show="flag" @click="moreLoad">刚刚看到这里，点击加载更多~</div>
    </div>
</template>
<script>
    import {getPlay} from 'common/js/dom'
    import {mapMutations,mapActions} from 'vuex'
    const NUM = 6
    const NEWNUM = 20
    export default{
        props:{
            videoList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                dat:[],
                msg:5,
                flag:true
            }
        },
        created(){
            this.dat = new Array(this.msg)
        },
        methods:{
            _getPlay(item){
                return getPlay(item)
            },
            moreLoad(){
                this.msg = 20
            },
            getData(){
                return this.videoList
            },
            onPlayer(item){
                this.setPlayer(item)
                this.$router.push('play')
                this.settab(false)
            },
            ...mapMutations({
                settab:'SET_TAB'
            }),
            ...mapActions([
                'setPlayer'
            ])
        },
        watch:{
            msg(newY){
                this.flag = false
               this.dat = new Array(this.msg)
               this.getData()
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .videolistbox
        padding: 1.024rem 0 0;
        background-color: #f3f3f3;
        h3
            padding-left: .512rem;
            margin-bottom: .42667rem;
            font-size: .64rem;
            font-weight: 400;
        .index__loadMore
            margin-top: .512rem;
            width: 100%;
            line-height: 1.728rem;
            font-size: .55467rem;
            color: #fb7299;
            background-color: #e7e7e7;
            text-align: center;
        .list-box
            padding: 0 .512rem;
            overflow:hidden;
            .item
                display: block;
                position: relative;
                padding: .42667rem 0 .42667rem 5.504rem;
                height: 3.11467rem;
                overflow: hidden;
                border-top: .02133rem solid #ccc;
                .img_wrap
                    position: absolute;
                    top: .42667rem;
                    left: 0;
                    width: 4.992rem;
                    height: 3.11467rem;
                    border-radius: .128rem;
                    overflow: hidden;
                    img
                        width: 100%;
                        height: 100%;
                div
                    .index_titlx
                        display: block;
                        margin-top: -.08533rem;
                        margin-bottom: .17067rem;
                        max-height: 1.536rem;
                        line-height: .768rem;
                        font-size: .59733rem;
                        color: #212121;
                        overflow: hidden;
                    .index_upName
                        display: block;
                        margin-bottom: .17067rem;
                        line-height: .68267rem;
                        font-size: .512rem;
                        color: #757575;
                .index_infowrap_s
                    line-height: .68267rem;
                    font-size: .512rem;
                    color: #757575;
                    .index_num
                        float: left;
                        width: 50%;
                        line-height: .68267rem;
                        font-size: .512rem;
                        color: #757575;
                    .index_view
                        float: left;
                        width: 50%;
                        line-height: .68267rem;
                        font-size: .512rem;
                        color: #757575;
            .item:first-child
                border-top: none;
</style>