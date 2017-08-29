<template>
    <div class="suggest">
        <div class="suggest_item" @click="onClick(item)" v-for="(item,index) in searchList">
            <div class="suggest_conent">
                <p v-html="getColor(item.value)"> 
                </p>
            </div>
        </div>
    </div>
</template>
<script>

    import {SearchList} from 'api/suggest'

    export default{
        props:{
            query:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                searchList:[]
            }
        },
        methods:{
            search(){
                SearchList(this.query).then((res)=>{
                    if(res.code === 0){
                        this.searchList = res.result.tag
                    }
                })
            },
            getColor(str){
               return str.replace(new RegExp(this.query),`<em class="suggest_high_light">${this.query}<em>`)
            },
            onClick(item){
                
                alert('接口暂不支持搜索')
            }
        },
        watch:{
            query(){
                this.search()
            }
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .suggest
        position: relative;
        z-index: 22;
        margin-top: 1.89867rem
        top:0
        .suggest_item     
            position: relative;
            width: 96.8%;
            margin-left: 3.2%;
            height: 1.87733rem;
            border-bottom: .02133rem solid #ccc;
            .suggest_conent
                position: relative;
                width: 75%;
                height: .59733rem;
                top: .64rem;
                overflow: hidden;
                p
                    font-size: .59733rem;
                    line-height: .59733rem;
                    color: #212121;
                    text-align: left;
                    em
                        font-style: normal;
                    .suggest_high_light
                        color:#fb7299;
                        em
                            color:#212121;


</style>