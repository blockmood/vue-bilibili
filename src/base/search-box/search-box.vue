<template>
    <div class="search-b">
        <div class="index_search">
            <i class="index_search_icon"></i>
            <input type="search" @keyup.enter="enter(query)" autocomplete="off"  v-model="query" class="search-input" :placeholder="placeholder" maxlength="33">
            <i class="index_close" v-show="query" @click="close"></i>
        </div>
        <div class="index__cancelBtn" @click="back">
            <p>取消</p>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default{
        props:{
			placeholder:{
				type:String,
				default:'搜索视频、番剧、UP主或AV号'
			},
            queryx:{
                type:String,
                default:''
            }
		},
        data(){
            return {
                query:'',
                historyList:{
                    list:[]
                }
            }
        },
        created(){
            this.$watch('query',(newQuery)=>{
                this.$emit('query',newQuery)
            })
        },
        methods:{
            back(){
                this.$router.push('recommend')
            },
            enter(query){
               alert('接口暂不支持搜索')
               this.setHistory(query)
            },
            close(){
                this.query = ''
            },
            ...mapMutations({
                setHistory:'SET_HISTORY'
            })
        },
        watch:{
            queryx(newVal){
                this.query = newVal
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .search-b
        position: fixed;
        width: 93.33%;
        top: 0;
        left: 0;
        height: 1.87733rem;
        padding: 0 3.33%;
        background-color: #fff;
        z-index: 1;
        &::before
            content: "";
            display: block;
            height: 0;
            clear: both;
        .index_search
            position: relative;
            width: 88.29%;
            height: 1.28rem;
            margin-top: .29867rem;
            float: left;
            .index_search_icon
                position: absolute;
                width: .93867rem;
                height: .93867rem;
                top: .17067rem;
                left: .512rem;
                background: url(search-pro.png) no-repeat;
                background-size: 100% 100%;
            .search-input
                display: block;
                width: 100%;
                height: 100%;
                padding-left: 1.70667rem;
                padding-right:.4rem;
                box-sizing: border-box;
                font-size: .55467rem;
                border: .02133rem solid #e7e7e7;
                border-radius: .17067rem;
                background-color: #f4f4f4;
                color: #505050;
                cursor: auto;
            .index_close
                position: absolute;
                width: 1.28rem;
                height: 1.28rem;
                top: 0;
                right: 0;
                background: url(./search-close.png) no-repeat;
                background-size: .59733rem .59733rem;
                background-position: 46.7% 46.7%;
                z-index:10
        .index__cancelBtn
            position: relative;
            float: right;
            width: 1.28rem;
            margin-top: .64rem;
            p
                text-align: right;
                color: #fb7299;
                font-size: .59733rem;
                line-height: .59733rem;
</style>