import jsonp from 'common/js/jsonp'
import {options,commonParams} from './config'


export function getPlayer(id){
    let url = 'https://api.bilibili.com/playurl'

    const data = Object.assign({},commonParams,{
        callback:'callbackfunction',
        aid:id,
        page:1,
        platform:'html5',
        quality:1,
        vtype:'mp4'
    })

    return jsonp(url,data,options)
}

