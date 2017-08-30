<template>
    <div class="search-box">
        <SearchBox @query="onQueryChange" :queryx="query"></SearchBox>
        <div class="index_recomme" v-show="!query">
            <p class="index_subtitle">大家都在搜</p>
            <div class="index_items">
                <div class="index_hotword" @click="onClick(item)" v-for="(item,index) in allSearch">
                    <p>{{item.keyword}}</p>
                </div>
            </div>
        </div>
        <suggest v-show="query" :query="query"></suggest>
        <History v-show="!query"></History>
    </div>
</template>
<script>
    import SearchBox from 'base/search-box/search-box'
    import Suggest from 'components/suggest/suggest'
    import History from 'components/history/history'
    import {AllSearch} from 'api/AllSearch'
    export default{
        data(){
            return {
                allSearch:AllSearch.list,
                query:''
            }
        },
        methods:{
            onQueryChange(newQuery){
                this.query = newQuery
            },
            onClick(item){
                this.query = item.keyword
            }
        },
        components:{
            SearchBox,
            Suggest,
            History
        }
    }
</script>
<style lang="stylus"rel="stylesheet/stylus">
    .search-box
        position:absolute;
        left:0
        right:0
        top:0px
        bottom:0
        background:#fff
        z-index:10
        .index_recomme
            position: relative;
            margin-top: 1.89867rem;
            z-index: 0;
            margin-left: .53333rem;
            margin-right: .14933rem;
            .index_subtitle
                position: relative;
                padding-top: .68267rem;
                color: #999;
                line-height: .59733rem;
                font-size: .59733rem;
                text-align: left;
            .index_items
                position: relative;
                width: 100%;
                margin-top: .17067rem;
                margin-bottom: .68267rem;
                height: 3.92533rem;
                overflow: hidden;
                .index_hotword
                    position: relative;
                    float: left;
                    padding: .40533rem .512rem;
                    margin-top: .512rem;
                    margin-right: .36267rem;
                    border: .04267rem solid #ccc;
                    border-radius: .68267rem;
                    p
                        font-size: .55467rem;
                        line-height: .55467rem;
                        color: #505050;
                        text-align: center;
</style>