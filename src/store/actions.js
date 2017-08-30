import * as types from './mutation-type'
import {saveHistory,deleteHistory} from 'common/js/cache'

export const setHistory = function({commit},list){
    commit(types.SET_HISTORY,saveHistory(list))
}

export const clearHistory = function ({commit}){
    commit(types.CLEAR_HISTORY,deleteHistory())
}