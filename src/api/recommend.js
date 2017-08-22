import jsonp from 'common/js/jsonp'
import {options,commonParams} from './config'

export function getSliderList(){
    let url = 'https://api.bilibili.com/x/web-show/res/loc'

    const data = Object.assign({},commonParams,{
		pf:7,
		id:1695
	})

    return jsonp(url,data,options)
}


export function getRanking(){
    let url = 'https://api.bilibili.com/x/web-interface/dynamic/index'
    
    const data = Object.assign({},commonParams,{
		
	})

    return jsonp(url,data,options)
    
}