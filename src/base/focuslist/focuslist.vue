<template>
    <div class="focuslist">
        <Scroll class="focus-list" :data="focusList">
            <div>
                <a href="javascript:;" class="index_item" v-for="(item,index) in focusList">
                    <div class="index_leftMack">
                        <div :class="getStyle(index)">{{getNum(index)}}</div>
                    </div>
                    <div class="index_content">
                        <img v-lazy="item.pic" alt="">
                    </div>
                    <div class="index_desc">
                        <div class="index_title">
                            <p>{{getTitle(item.title)}}</p>
                        </div>
                        <div class="index_author">
                            <img src="./ico_up.png" alt="">
                            <p>{{item.author}}</p>
                            <div class="index_clear_src"></div>
                        </div>
                        <div class="index_subInfo">
                            <div class="index_play">
                                <img src="./ico_play.png" alt="">
                                <p>{{_getPlay(item.play)}}</p>
                                <div class="index_clear"></div>
                            </div>
                            <div class="index__danmuAmount">
                                <img src="./ico_danmu.png" alt="">
                                <p>{{item.video_review}}</p>
                                <div class="index_clear"></div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="logging">
                    <loading></loading>
                </div>
            </div>
        </Scroll>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Scroll from 'base/scroll/scroll'
    import {getPlay} from 'common/js/dom'
    import loading from 'base/loading/loading'
    
    export default{
        created(){
            this._getPlay()
    
        },
        methods:{
            _getPlay(item){
                return getPlay(item)
            },
            getTitle(tit){
                return tit.slice(0,23)
            },
            getStyle(index){
                index = index+1
                if(index === 1){
                    return 'one-rank'
                }else if(index === 2){
                    return 'two-rank'
                }else if(index === 3){
                    return 'three-rank'
                }else{
                    return index
                }
            },
            getNum(index){
                index = index+1
                 if(index === 1){
                    return ''
                }else if(index === 2){
                    return ''
                }else if(index === 3){
                    return ''
                }else{
                    return index
                }
            }
        },
        computed:{
            ...mapGetters([
                'focusList'
            ]),
        },
        components:{
            Scroll,
            loading
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .focuslist
        position:absolute
        left:0
        top:3.7rem;
        right:0
        bottom:0
        background-color: #f4f4f4;
        overflow: hidden;
        .focus-list
            height:100%;
            overflow:hidden;
            .logging
                
            .index_item
                display: block;
                text-decoration: none;
                position: relative;
                width: 100%;
                margin-top: .768rem;
                opacity: 1;
                -webkit-transform: scale(1);
                transition: all .3s;
                .index_leftMack
                    position: relative;
                    float: left;
                    width: 2.176rem;
                    height: 3.11467rem;
                    background-color: #f4f4f4;
                    div
                        font-size:0.59733rem
                        color:#999
                        text-align:center;
                        line-height:3.11467rem;
                    .one-rank
                        display: block;
                        width: 1rem;
                        height:2rem
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        -webkit-transform: translate(-50%,-50%);
                        background:url('rank1.png') no-repeat center center;
                        background-size:100%;
                    .two-rank
                        display: block;
                        width: 1rem;
                        height:2rem
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        -webkit-transform: translate(-50%,-50%);
                        background:url('rank2.png') no-repeat center center;
                        background-size:100%;
                    .three-rank
                        display: block;
                        width: 1rem;
                        height:2rem
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        -webkit-transform: translate(-50%,-50%);
                        background:url('rank3.png') no-repeat center center;
                        background-size:100%;
                .index_content
                    position: relative;
                    float: left;
                    width: 4.992rem;
                    height: 3.11467rem;
                    overflow: hidden;
                    border-radius: .17067rem;
                    background-color: #e7e7e7;
                    background-position: .93867rem 0;
                    background-size: 3.11467rem 3.11467rem;
                    background-repeat: no-repeat;
                    img
                        display: block;
                        width: 100%;
                .index_desc
                    position: relative;
                    margin-left: 7.68rem;
                    margin-right: .512rem;
                    .index_title
                        position: relative;
                        width: 100%;
                        p
                            text-align: left;
                            font-size: .59733rem;
                            color: #212121;
                            line-height: .68267rem;
                            word-break: break-all;
                    .index_author
                        position: relative;
                        width: 100%;
                        height: 1.19467rem;
                        margin-top: .08533rem;
                        img
                            position: relative;
                            display: block;
                            margin-top: .59733rem;
                            width: .59733rem;
                            -webkit-transform: translateY(-50%);
                            float: left;
                        p
                            margin-left: .85333rem;
                            text-align: left;
                            font-size: .512rem;
                            color: #999;
                            line-height: 1.19467rem;
                        .index_clear_src
                            clear:both
                    .index_subInfo
                        position: relative;
                        width: 100%;
                        .index_play       
                            position: relative;
                            float: left;
                            img
                                display: inline-block;
                                vertical-align: middle;
                                width: .59733rem;
                                float: left;
                            p
                                margin-left: .85333rem;
                                text-align: left;
                                font-size: .512rem;
                                color: #999;
                                line-height: .512rem;
                            .index_clear
                                clear:both
                        .index__danmuAmount
                            position: relative;
                            margin-left: 3.84rem;
                            img
                                display: inline-block;
                                vertical-align: middle;
                                width: .59733rem;
                                float: left;
                            p
                                margin-left: .85333rem;
                                text-align: left;
                                font-size: .512rem;
                                color: #999;
                                line-height: .512rem;
                            .index_clear
                                clear:both
            


</style>