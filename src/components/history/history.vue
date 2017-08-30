<template>
    <div class="history_box">
        <div class="history_title">
            <p>历史搜索</p>
        </div>
        <div class="history_item" @click="onClick" v-for="item in history">
            <div class="index_icon">
                <img src="./history.png" alt="">
            </div>
            <p>{{item}}</p>
        </div>
        <div class="index_removehistory" @click="clearHistory">
            <p>清除历史记录</p>
        </div>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
       computed:{
          ...mapGetters([
              'history'
          ])
       },
       methods:{
          clearHistory(){
              
          },
          onClick(){
            alert('接口暂时不支持搜索')
          },
          ...mapActions([
              'clearHistory'
          ])
       }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .history_box
        position: relative;
        margin-top: 1.10933rem;
        border-top: .42667rem solid #f4f4f4;
        .history_title
            position: relative;
            margin-left: .53333rem;
            p
                text-align: left;
                color: #999;
                font-size: .59733rem;
                line-height: 1.96267rem;
        .history_item
            position: relative;
            height: 1.87733rem;
            margin-left: .53333rem;
            border-bottom: .02133rem solid #ccc
            &::before
                content: "";
                display: block;
                height: 0;
                clear: both;
            .index_icon
                position: relative;
                float: left;
                width: .68267rem;
                margin-top: .59733rem;
                img
                    display: block;
                    width: 100%;
            p
                position: relative;
                float: left;
                width: 11.94667rem;
                overflow: hidden;
                margin-left: .384rem;
                font-size: .59733rem;
                line-height: 1.87733rem;
                color: #505050;
                text-align: left;
        .index_removehistory
            position: relative;
            margin: auto;
            p
                text-align: center;
                color: #999;
                font-size: .59733rem;
                line-height: 1.96267rem;
</style>