import jsonp from 'common/js/jsonp'
import {options,commonParams} from './config'


export function getFocus(rid){
    let url = 'https://api.bilibili.com/x/web-interface/ranking?'

    const data = Object.assign({},commonParams,{
        rid:rid,
        day:3
    })

    return jsonp(url,data,options)
}