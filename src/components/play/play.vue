<template>  
    <div class="play_box">
        <MyHeader></MyHeader>
        <div class="index_play">
            <div class="play_container" >
                <div class="play_box_l">
                    <video  
                        width="100%" 
                        height="100%" 
                        preload="auto" 
                        ref="video"
                        load="loaded"
                        webkit-playsinline
                        playsinline
                        v-show="videoflag"
                        @click="toggleVideo"
                        @timeupdate="update"
                     >
                    </video>
                    <div class="display">
                        <div class="input-bar"></div>
                        <div class="control-bar" v-show="barshow">
                            <div class="time-container">
                                <span class="control-text">{{getTime(currentTime)}}</span>
                                <span class="control-split"></span>
                                <span class="time-total">{{getTime(player.duration)}}</span>
                            </div>
                        </div>
                        <div class="load-layer">   
                            <img :src="player.pic" v-show="show">
                             <!-- 按钮 -->
                            <i  v-show="btnshow" :class="getIcion" 
                                @click="toggleClick"
                                ></i>

                            <div class="index_top" v-show="show">
                                <p>av{{player.aid}}</p>
                            </div>
                            <div class="index_time_item" v-show="show">
                                <p>{{getTime(player.duration)}}</p>
                            </div>
                            <div class="index_cccTpis">
                                <div class="index_banner" v-show="show">
                                    <p>高清更流畅，就用bilibili客户端(*^_^*)</p>
                                </div>
                                <div class="open_link" v-show="show">
                                    <p>用客户端打开</p>
                                </div>
                                <div class="index_clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MyHeader from 'components/my-header/my-header'
    import {getPlayer} from 'api/player'
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return {
                date:[],
                showplay:true,
                currentTime:0,
                icon:false,
                url:true,
                show:true,
                btnshow:true,
                barshow:false,
                index:1,
                videoflag:false
            }
        },
        created(){
            this.getPlayData()
            if(this.player){
                this.$router.push('recommend')
            }
        },
        computed:{
            getIcion:function(){
                if(!this.icon){
                    return 'pause-icon'
                }else{
                    return 'player-icon'
                }
            },
            ...mapGetters([
                'player'
            ])
        },
        methods:{
            toggleClick(){
                if(this.url){
                    this.$refs.video.src = this.date.durl[0].url
                    this.url = false
                }
                this.$refs.video.src = this.date.durl[0].url
                this.show = false
                this.barshow = true
                this.icon = !this.icon
                this.videoflag = true
            },
            toggleVideo(){
                this.btnshow = !this.btnshow
                this.barshow = !this.barshow
            },
            _pop(num){
                const len = num.toString().length
                if(len < 2){
                    return '0' + num
                }
                return num
            },
            getPlayData(){
                getPlayer(this.player.aid).then((res)=>{
                    this.date = res
                })
            },
            update(e){
                this.currentTime =  e.target.currentTime
            },
            getTime:function(inter){
                inter = inter | 0
                const muinte = inter / 60 | 0
                const second = this._pop(inter % 60)
                return `${muinte}:${second}`
            }       
        },
        watch:{
            player(newY){
                this.$refs.video.src = this.date.durl[0].url
                this.getPlayData()
                this.barshow = false
                this.show = true
                this.btnshow = true
                this.videoflag = false
                this.icon = false
            },
            icon(newY){
                if(newY){
                    this.$refs.video.play()
                }else{
                    this.$refs.video.pause()
                }
            },
        },
        components:{
            MyHeader
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .play_box
        position:absolute;
        left:0
        right:0
        top:0
        bottom:0
        z-index:15
        .index_play
            position: relative;
            z-index: 100;
            top: 2rem;
            height:10rem;
            .play_container
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;
                z-index:10;
                background:#fff;
                overflow:hidden;
                .play_box_l
                    overflow:hidden;
                    video
                        width:100%;
                        height:100%;
                        position:absolute;
                        z-index:8
                    .display
                        position:absolute;
                        left:0;
                        right:0;
                        top:0;
                        bottom:0;
                        overflow:hidden;
                        background:#000;
                        .control-bar
                            position: absolute;
                            z-index: 10;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 1.86655rem;
                            border-width: 0;
                            border-style: solid;
                            border-color: #e2e2e2;
                            background-color: rgba(0, 0, 0, 0.5);
                            font-size: 0;
                            text-align: left;
                            opacity: 1;
                            .time-container
                                position: absolute;
                                left: 0;
                                height: 1.86655rem;
                                bottom: 0;
                                .control-text
                                    width: 2.1332rem;
                                    text-align: right;
                                    font-size: 0.66662rem;
                                    font-family: arial,sans-serif;
                                    color: #fff;
                                    height: 100%;
                                    line-height: 2.06653rem;
                                    vertical-align: top;
                                    float: left;
                                .control-split
                                    width: 0.33331rem;
                                    font-size: 0.66662rem;
                                    font-family: arial,sans-serif;
                                    color: #fff;
                                    height: 100%;
                                    line-height: 2.06653rem;
                                    vertical-align: top;
                                    float: left;
                                    &::before
                                        content: "/";
                                        margin: 0 0.06666rem;
                                .time-total
                                    text-align: left;
                                    width: 2.1332rem;
                                    font-size: 0.66662rem;
                                    font-family: arial,sans-serif;
                                    color: #fff;
                                    height: 100%;
                                    line-height: 2.06653rem;
                                    vertical-align: top;
                                    float: left;
                        .load-layer
                            position:absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            display: block;
                            overflow: hidden;
                            cursor: pointer;
                            text-align: center;
                            img
                                border-style: none;
                                display: inline-block;
                                position: relative;
                                width: 100%;
                                height: 100%;
                                opacity: 0.85;
                                margin: 0;
                                padding: 0;
                                // filter: blur(0.34133rem);
                                -webkit-filter: blur(0.34133rem);
                            .pause-icon
                                position: absolute;
                                display: block;
                                bottom: 1.79988rem;
                                right: 0.06666rem;
                                width: 3.18933rem;
                                height: 2.69013rem;
                                background: transparent url(./ui_2.png) no-repeat -3.38347rem -10.03947rem;
                                background-size: 19.968rem 60.76373rem;
                                z-index:10
                            .player-icon
                                position: absolute;
                                display: block;
                                bottom: 1.79988rem;
                                right: 0.06666rem;
                                width: 3.18933rem;
                                height: 2.69013rem;
                                background-repeat: no-repeat;
                                background: transparent url(./ui_2.png) no-repeat -3.38347rem -13.36747rem;
                                background-size: 19.968rem 60.76373rem;
                                z-index:10
                            .index_top
                                position: absolute;
                                top: 0;
                                left: 0;
                                z-index: 999;
                                width: 100%;
                                background: -webkit-gradient(linear,0 0,0 100%,from(rgba(33,33,33,.5)),to(rgba(33,33,33,0)));
                                background: linear-gradient(180deg,rgba(33,33,33,.5),rgba(33,33,33,0));
                                p
                                    font-size: .64rem;
                                    color: #fff;
                                    line-height: 1.36533rem;
                                    text-align: center;
                            .index_time_item
                                position: absolute;
                                z-index: 999;
                                bottom: 2.56rem;
                                left: .53333rem;
                                border: .08533rem solid hsla(0,0%,100%,.6);
                                background-color: hsla(0,0%,100%,.2);
                                padding-left: .17067rem;
                                padding-right: .17067rem;
                                border-radius: .21333rem;
                                p
                                    color: #fff;
                                    font-size: .64rem;
                                    line-height: .98133rem;
                                    text-align: center;
                            .index_cccTpis
                                position: absolute;
                                z-index: 999;
                                width: 100%;
                                height: 1.62133rem;
                                left: 0;
                                bottom: 0;
                                background-color: rgba(33,33,33,.5);
                                .index_banner
                                    position: relative;
                                    float: left;
                                    margin-left: .512rem;
                                    p
                                        font-size: .55467rem;
                                        line-height: 1.62133rem;
                                        color: #fff;
                                        text-align: left;
                                .open_link
                                    position: relative;
                                    float: right;
                                    background-color: #fb7299;
                                    border-radius: .17067rem;
                                    width: 3.84rem;
                                    height: 1.28rem;
                                    margin-top: .17067rem;
                                    margin-right: .512rem;
                                    p
                                        font-size: .55467rem;
                                        line-height: 1.28rem;
                                        color: #fff;
                                        text-align: center;
                                .index_clear
                                    clear: both;

</style>