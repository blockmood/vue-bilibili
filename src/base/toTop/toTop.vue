<template>
    <div class="toTop" @click="scrollTop">
        <img src="./toTop1.png">
    </div>
</template>
<script>
    export default{
        methods:{
            scrollTop(){
                this.$emit('scrollTop')
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .toTop
        position: fixed;
        z-index: 3;
        bottom: .896rem;
        right: .896rem;
        width: 1.70667rem;
        padding-left: 1rem;
        padding-top: 1rem;
        img
            display: block;
            width: 100%;
</style>