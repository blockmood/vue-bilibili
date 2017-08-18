import orangeJsonp from 'jsonp'

export default function jsonp(url,data,options){
    
    url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)

    return new Promise((resolve,reject)=>{
        orangeJsonp(url,options,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}


function params(data){
    let url = ''
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : ''
        url+= '&'+ k +'=' + encodeURIComponent(value)
    }
    return url
}