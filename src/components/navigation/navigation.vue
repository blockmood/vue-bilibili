<template>
    <div class="navigation">
        <div class="nav-container">
             <div class="tabg" v-for = "(item,index) in TopTlist" @click="getList(item)">
                <p :class="{active:item.tid === tid}">{{item.name}}</p>
             </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        props:{
            tid:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                nav:[]
            }
        },
        created(){
            this.getNavList()
        },
        methods:{
            getList(tid){
                this.$emit('getList',tid)
            },
            getNavList(){
                if(!this.TopTlist.length){
                    this.$router.push('/recommend')
                    return 
                }
            }
        },
        computed:{
            ...mapGetters([
                'TopTlist'
            ])
        },
        watch:{
            TopTlist(newList){
                if(!newList.length){
                    return 
                }
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