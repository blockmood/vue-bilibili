<template>
    <div class="mad">
        <RankIng :rankList="rankList" v-if="rankList.length"></RankIng>
    </div>
</template>
<script>
    import RankIng from 'base/ranking/ranking'
    import {getRanking} from 'api/recommend'

    export default{
        data(){
            return {
                sliderDist:[],
                rankList:[],
                show:false
            }
        },
        created(){
            setTimeout(()=>{
                this._rankIng()
            },20)
        },
        methods:{
            _rankIng(){
                getRanking().then((res)=>{
                   for(let i in res.data){
                       this.rankList.push(res.data[i])
                   }
                })
            }
        },
        components:{
            RankIng
        }
    }

</script>