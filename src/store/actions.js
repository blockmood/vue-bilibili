import * as types from './mutation-type'
import {saveHistory,deleteHistory,savePlayer} from 'common/js/cache'

export const setHistory = function({commit},list){
    commit(types.SET_HISTORY,saveHistory(list))
}

export const clearHistory = function ({commit}){
    commit(types.CLEAR_HISTORY,deleteHistory())
}


export const setPlayer = function({commit},list){
    commit(types.SET_PLAYER,savePlayer(list))
}