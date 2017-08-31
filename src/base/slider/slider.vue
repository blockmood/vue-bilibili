<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
        <slot></slot>
    </div>
    <div class="dots">
        <span class="dot" v-for="(item,index) in dots" :class="{active:index === currentPageIndex}"></span>
    </div>
  </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import {addClass} from 'common/js/dom.js'
    export default{
      data(){
        return {
          dots:0,
          currentPageIndex:0
        }
      },
      props:{
        loop:{
          type:Boolean,
          default:true
        },
        autoPlay:{
          type:Boolean,
          default:true
        },
        interVal:{
          type:Number,
          default:4000
        }
      },
      mounted(){
        setTimeout(()=>{
          this._setSliderWidth()
          this._initSlider()
          this._dots()
        },20)

        window.addEventListener('resize',()=>{
          if(!this.slider){
            return
          }
          this._setSliderWidth()
          this.slider.refresh()
        })

      },
      methods:{
        _setSliderWidth(){
          this.children = this.$refs.sliderGroup.children
          let width = 0
          let sliderWidth = this.$refs.slider.clientWidth
          for(let i=0;i<this.children.length;i++){
            this.child = this.children[i]
            addClass(this.child,'slider-item')
            
            this.child.style.width = sliderWidth + 'px'
            width+= sliderWidth
          }
          this.$refs.sliderGroup.style.width = width + 'px'
        },
        _initSlider(){
            this.slider = new BScroll(this.$refs.slider,{
                scrollX : true,
                scrollY : false,
                momentum:false,
                snap:true,
                snapLoop:this.loop,
                snapThreshold:0.3,
                snapSpeed:400,
            })

            this.slider.on('scrollEnd',()=>{
              let pageIndex = this.slider.getCurrentPage().pageX
              this.currentPageIndex = pageIndex
            })
            
        },
        _play(){
            let pageIndex = this.currentPageIndex + 1
            this.timer = setTimeout(()=>{
              this.slider.goToPage(pageIndex,0,400)
            },this.interVal)
        },
        _dots(){
          this.dots = new Array(this.children.length)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .slider
        min-height:1px
        .slider-group
            position:relative
            overflow:hidden
            .slider-item
                float:left
                overflow:hidden
                white-space:nowrap
                a
                  display:block
                  width:100%
                img
                  display:block
                  width:100%
        .dots
            position:absolute
            bottom:12px
            left:50%;
            margin-left:-50px
            text-align:center
            font-size:0
            background:rgba(0,0,0,.5)
            padding:1px 10px
            border-radius:5px
            z-index:10;
            .dot
              display: inline-block
              margin: 0 4px
              width: 6px
              height: 6px
              border-radius: 50%
              background:#fff;
              &.active
                background:#de698c

</style>