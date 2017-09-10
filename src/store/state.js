import {getHistory,getPlayer} from 'common/js/cache'

const state = {
    TopTlist:[],
    focusList:[],
    history:getHistory(),
    player:getPlayer(),
    clsId:0,
    lstid:0,
    rankshow:false,
    searchshow:false,
    rid:0,
    tab:true,
    header:true
}

export default state