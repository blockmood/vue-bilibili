import * as types from './mutation-type'

const mutations = {
    [types.SET_LIST](state,list){
        state.TopTlist = list
    },
    [types.SET_CLSID](state,id){
        state.clsId = id
    },
    [types.SET_TID](state,id){
        state.lstid = id
    },
    [types.SET_FOCUS_LIST](state,data){
        state.focusList = data
    },
    [types.SET_HISTORY](state,list){
        state.history = list
    },
    [types.CLEAR_HISTORY](state){
        state.history = []
    },
    [types.SET_RANK_SHOW](state,val){
        state.rankshow = val
    },
    [types.SET_SEARCH_SHOW](state,val){
        state.searchshow = val
    },
    [types.SET_RID](state,id){
        state.rid = id
    }
}

export default mutations