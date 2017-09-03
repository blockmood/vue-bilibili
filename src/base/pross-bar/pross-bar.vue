<template>
    <div class="prossbar" ref="prossbar"
                @touchstart.prevent="TouchStart"
                @touchmove.prevent="TouchMove"
                @touchend="touchend"
    >
        <div class="ui-slider">
            <div class="ui-slider-tranck" ref="trank"></div>
            <div class="ui-slider-label"
            ></div>
            <div class="ui-slider-thumb" ref="prossbarThumb"></div>
            <div class="ui-slider-event-layer"></div>
        </div>
    </div>
</template>
<script>
    const PROSS_BTN_WIDTH = 20
    export default{
        props:{
            precent:{
                type:Number,
                default:0
            },
            timeWidth:{
                type:Number,
                default:0
            }
        },
        created(){
            this.touch = {}
        },
        methods:{
            TouchStart(e){

                this.touch.initiated = true
                this.touch.startX = e.touches[0].pageX
            },
            TouchMove(e){
                if(!this.touch.initiated){
                    return
                }
                this.touch.offsetWidth = e.touches[0].pageX-this.timeWidth
                const width = Math.min(this.touch.offsetWidth,this.$refs.prossbar.clientWidth-PROSS_BTN_WIDTH)
                this.$refs.prossbarThumb.style.width = width + 'px'
            },
            touchend(e){
                this.touch.initiated = false
                this.triggerPercent()
            },
            triggerPercent(){
                const prossbarWidth = this.$refs.prossbar.clientWidth - PROSS_BTN_WIDTH
                const precent =  this.touch.offsetWidth / prossbarWidth 
                this.$emit('precentChange',precent)
            }
        },
        watch:{
            precent(newVal){
                if(newVal >= 0 && !this.touch.initiated){
                    const prossbarWidth = this.$refs.prossbar.clientWidth - PROSS_BTN_WIDTH
                    const offsetWidth = newVal * prossbarWidth
                    this.$refs.prossbarThumb.style.width = offsetWidth + 'px'
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .prossbar
        position: absolute;
        bottom: 0.73329rem;
        left: 4.66637rem;
        right: 4.79969rem;
        width: auto;
        height: 0.19999rem;
        .ui-slider
            position: absolute;
            height: 100%;
            left: 0;
            right: 0.46664rem;
            width: auto;
            box-shadow: none;
            border-radius: 0;
            background-color: transparent;
            .ui-slider-tranck
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: auto;
                height: auto;
                border-style: none;
                box-shadow: none;
                background: #4c4c4c;
            .ui-slider-label
                position: absolute;
                display: block;
                top: 0px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                line-height: 30px;
                font-size: 10px;
                color: #fff;
            .ui-slider-thumb
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                height: auto;
                -webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                -ms-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
                border-radius: 0;
                box-shadow: none;
                background-color: #de698c;
                &::after
                    content: '';
                    position: absolute;
                    display: block;
                    right: -0.59996rem;
                    top: -0.26665rem;
                    width: 0.59996rem;
                    height: 0.59996rem;
                    border-radius: 0.59996rem;
                    box-shadow: none;
                    background-color: white;
                    box-shadow: 0.02133rem 0.02133rem 0.128rem black !important;
            .ui-slider-event-layer
                top: -0.26665rem;
                bottom: -0.06666rem;
                left: 0;
                right: -0.46664rem;
                width: auto;
                height: auto;
</style>