import jsonp from 'common/js/jsonp'
import {options,commparms} from './config'


export function getSliderList(){
    let url = 'https://api.bilibili.com/x/web-show/res/loc'

    const data = Object.assign({},commparms,{
        pf:7,
        id:1695
    })

    return jsonp(url,data,options)
}