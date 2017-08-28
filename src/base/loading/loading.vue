<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <span class="desc">正在载入...</span>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    height:20px
    position:relative;
    z-index:999
    img
      vertical-align:bottom
    .desc
      display:inline
      line-height: 20px
      font-size: 0.55467rem
      color: #212121
</style>
