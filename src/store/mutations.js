import * as types from './mutation-type'

const mutations = {
    [types.SET_LIST](state,list){
        state.TopTlist = list
    },
    [types.SET_CLSID](state,id){
        state.clsId = id
    }
}

export default mutations