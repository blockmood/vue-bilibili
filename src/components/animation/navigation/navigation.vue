<template>
    <div class="navigation">
        <div class="nav-container">
             <div class="tabg" v-for = "(item,index) in nav" @click="getList(item)">
                <p :class="{active:item.tid === tid}">{{item.name}}</p>
             </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            tid:{
                type:Number,
                default:24
            }
        },
        data(){
            return {
                nav:[
                    {
                        name:'MAD·AMV',
                        tid:24
                    },
                    {
                        name:'MMD·3D',
                        tid:25
                    },
                    {
                        name:'短片·手书·配音',
                        tid:47
                    },
                    {
                        name:'综合',
                        tid:27
                    }
                ]
            }
        },
        methods:{
            getList(tid){
                this.$emit('getList',tid)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .navigation
        top: 3.69733rem;
        position: fixed;
        width: 100%;
        overflow: hidden;
        background:#fff;
        z-index:4
        .nav-container
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            padding-left: .996rem;
            -webkit-overflow-scrolling: touch;
            padding-bottom: .21333rem;
            border-bottom: .02133rem solid #ccc;
            .tabg
                display: inline-block;
                margin-right: 1.024rem;
                p
                    font-size: .59733rem;
                    line-height: 1.87733rem;
                    text-align: center;
                    color: #757575;
                p.active
                    color:#fb7299
</style>