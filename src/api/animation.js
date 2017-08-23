import jsonp from 'common/js/jsonp'
import {options,commonParams} from './config'


export function getAniList(tid,n){
    let url = 'https://api.bilibili.com/archive_rank/getarchiverankbypartion'

    const data = Object.assign({},commonParams,{
        tid:tid,
        pn:n
    })

    return jsonp(url,data,options)
}