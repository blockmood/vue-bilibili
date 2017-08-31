<template>  
    <div class="play_box">
        <MyHeader></MyHeader>
        <div class="index_play">
            <div class="play_container">
                <div class="play_box_l">
                    <video  v-show="videoshow"
                        width="100%" 
                        height="100%" 
                        preload="auto" 
                        ref="video"
                     >
                    </video>
                    <div class="display" v-show="show">
                        <div class="input-bar"></div>
                        <div class="control-bar"></div>
                        <div class="load-layer">
                            <img :src="date.img" ref="img">
                            <i class="player-icon" @click="play"></i>
                            <div class="index_top">
                                <p>{{getTitle}}</p>
                            </div>
                            <div class="index_time_item">
                                <p>{{getTime}}</p>
                            </div>
                            <div class="index_cccTpis">
                                <div class="index_banner">
                                    <p>高清更流畅，就用bilibili客户端(*^_^*)</p>
                                </div>
                                <div class="open_link">
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
    import {mapGetters} from 'vuex'    
    import {getPlayer} from 'api/player'
    export default{
        data(){
            return {
                date:[],
                show:true,
                videoshow:false
            }
        },
        created(){
            if(this.player){
                this.$router.push('recommend')
            }
            this.getPlay(this.player.aid)
        },
        computed:{
            getTitle:function(){
                return 'av' + this.player.aid
            },
            getTime:function(){
                const miunte = this.player.duration / 60 | 0
                const second = this._pad(this.player.duration % 60)
                return `${miunte}:${second}`
            }, 
            ...mapGetters([
                'player'
            ])
        },
        methods:{
            _pad(num){
                let len = num.toString().length
                if(len < 2){
                    return '0' + num
                }
                return num
            },
            getPlay(aid){
                getPlayer(aid).then((res)=>{
                    console.log(res)
                    this.date = res
                })
            },
            play(){
                this.$refs.video.src = this.date.durl[0].url
                this.show = false
                this.videoshow = true
                this._play()
            },
            _play(){
                this.$refs.video.play()
            }
        },
        watch:{
            player(newVal){
                this.getPlay(newVal.aid)
            }
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
            top: 1.32267rem;
            height:10rem;
            .play_container
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;
                background:#fff;
                .play_box_l
                    overflow:hidden;
                    video
                        width:100%;
                        height:100%;
                    .display
                        position:absolute;
                        left:0;
                        right:0;
                        top:0;
                        bottom:0;
                        overflow:hidden;
                        .load-layer
                            position:absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            display: block;
                            background-color: rgba(10, 10, 10, 0.5);
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
                            .player-icon
                                position: absolute;
                                display: block;
                                bottom: 1.79988rem;
                                right: 0.06666rem;
                                width: 3.18933rem;
                                height: 2.69013rem;
                                background: transparent url(./ui_2.png) no-repeat -3.38347rem -10.03947rem;
                                background-size: 19.968rem 60.76373rem;
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