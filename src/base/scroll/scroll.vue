<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'

    const TopHeight = -300

    export default{
        props:{
            probeType:{
                type:Number,
                default:1
            },
            click:{
                type:Boolean,
                default:true
            },
            data:{
                type:Array,
                default:[]
            },
            refreshDelay:{
                type: Number,
                default: 20
            },
            listenScroll:{
                type : Boolean,
                default:false
            },
            pullup:{
                type:Boolean,
                default:false
            },
            topShow:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            setTimeout(() => {
                this._initScroll()
            }, 20)
        },
        methods:{
            _initScroll(){
                if (!this.$refs.wrapper) {
                    return
                }
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                })

                if(this.listenScroll){
                    let that = this
                    this.scroll.on('scroll',(pos)=>{
                        that.$emit('scroll',pos)
                    })
                }

                if(this.pullup){
                    this.scroll.on('scrollEnd',(pos)=>{
                        if(this.scroll.y <= this.scroll.maxScrollY + 50){
                            this.$emit('scrollEnd')
                        }
                    })
                }

                if(this.topShow){
                    this.scroll.on('scrollEnd',(pos)=>{
                        if(this.scroll.y  >= TopHeight){
                            this.$emit('scrollEnd',pos)
                        }
                    })
                }

            },
            refresh(){
                this.scroll && this.scroll.refresh()
            },
            scrollTo(){
                this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
            },
            scrollToElement(){
                this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
            }
        },
        watch:{
            data() {
                setTimeout(() => {
                    this.refresh()
                }, this.refreshDelay)
            }
        }
    }
</script>