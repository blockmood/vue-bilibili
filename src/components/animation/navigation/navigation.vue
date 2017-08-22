<template>
    <div class="navigation">
        <div class="nav-container">
             <router-link class="tabg" to="/mad"><p>MAD·AMV</p></router-link>
             <router-link class="tabg" to="/recommend"><p>MMD·3D</p></router-link>
             <router-link class="tabg" to="/recommend"><p>短片·手书·配音</p></router-link>
             <router-link class="tabg" to="/recommend"><p>综合</p></router-link>
        </div>
    </div>
</template>
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
            .router-link-active p
                color:#fb7299
</style>