<template>
    <div class="focus">
        <div class="fix-top">
            <div class="top-area">
                <a href="javascript:;" class="index_back" @click="back">
                    <img src="./back.png" alt="">
                </a>
                <div class="index_title">
                    <p>排行榜</p>
                </div>
                <a href="javascript:;" class="index_vvbtn">
                    <p>下载客户端</p>
                </a>
            </div>
        </div>
        <div class="focusnav">
            <div class="tab-left">
                <div class="left-scroll">
                    <a href="javascript:;" class="a" 
                        :class="{active:rid === item.rid}" 
                        v-for="item in FocusNavList"
                        @click="getFcousList(item)"
                        >
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
        </div>
        <FocusList></FocusList>
    </div>
</template>
<script>

    import FocusList from 'base/focuslist/focuslist'
    import {FocusNavList} from 'common/js/config'
    import {getFocus} from 'api/focus'
    import {mapMutations,mapGetters} from 'vuex'

    export default{
        data(){
            return {
                FocusNavList:FocusNavList,
            }
        },
        methods:{
            getFcousList(item){
                this.setRid(item.rid)
                getFocus(this.rid).then((res)=>{
                    if(res.code === 0){
                        this.setFocusList(res.data.list)
                    }
                })
            },
            back(){
                this.setRankShow(false)
            },
            ...mapMutations({
                setFocusList:'SET_FOCUS_LIST',
                setRankShow:'SET_RANK_SHOW',
                setRid:'SET_RID'
            })
        },
        computed:{
            ...mapGetters([
                'focusList',
                'rid'
            ])
        },
        components:{
            FocusList,
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .focus
        position:absolute;
        left:0
        right:0
        top:0
        bottom:0
        z-index:9
        background:#fff
        .focusnav
            position: fixed;
            background-color: #fff;
            width: 100%;
            height: 1.87733rem;
            top: 1.856rem;
            z-index: 5;
            overflow: hidden;
            .tab-left
                position: relative;
                width: 100%;
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
                        margin-right: 1.29333rem;
                        p
                            width: 1.36533rem;
                            font-size: .59733rem;
                            line-height: 1.28rem;
                            text-align: center;
                    .active p
                        color: #fb7299;
                        border-bottom: .08533rem solid #fb7299;
        .fix-top
            position: fixed;
            z-index: 21;
            width: 100%;
            background: #fff;
            .top-area
                position: relative;
                width: 100%;
                height: 1.32267rem;
                padding: .27733rem 0;
                background-color: #fff;
                .index_back
                    position: absolute;
                    display: flex;
                    left: .42667rem;
                    top: 50%;

                    width: 1.536rem;
                    height:1.536rem;
                    -webkit-transform: translateY(-50%);
                    img
                        position: relative;
                        display: block;
                        width: 25%;
                        margin: auto;
                .index_title
                    position: absolute;
                    width: 2.26133rem;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%);
                    p
                        font-size: .68267rem;
                        line-height: 1.024rem;
                        color: #fb7299;
                        text-align: center;
                .index_vvbtn
                    position: absolute;
                    display: block;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    right: .55467rem;
                    width: 3.41333rem;
                    height: 1.28rem;
                    border: .04267rem solid #fb7299;
                    border-radius: .17067rem;
                    p
                        font-size: .59733rem;
                        line-height: 1.28rem;
                        text-align: center;
                        color: #fb7299;
</style> 