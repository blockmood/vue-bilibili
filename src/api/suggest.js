import jsonp from 'common/js/jsonp'
import {options,commonParams} from './config'


export function SearchList(term){
    let url = 'https://s.search.bilibili.com/main/suggest'

    const data = Object.assign({},commonParams,{
        term:term,
        suggest_type:'accurate',
        sub_type:'tag',
        main_ver:'v1',
        bangumi_acc_num:1,
        special_acc_num:0,
        upuser_acc_num:0,
        tag_num:10,
        rnd:0.7843769884483893
    })

    return jsonp(url,data,options)
}

