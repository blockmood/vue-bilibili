import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const PLAYER_KEY = '__player__'
const SEARCH_MAX_LEN = 8

function insertArray(arr,val,compare,maxlen){
    let index = arr.findIndex(compare)
    if(index == 0){
        return 
    }
    if(index > 0){
        arr.splice(index,1)
    }
    arr.unshift(val)
    if(maxlen && arr.length > maxlen){
        arr.pop()
    }
}

export function saveHistory(query) {
    let searchs = storage.get(SEARCH_KEY,[])
    insertArray(searchs,query,(item)=>{
        return item === query
    },SEARCH_MAX_LEN)
    storage.set(SEARCH_KEY,searchs)
    return searchs
}

export function getHistory(){
    return storage.get(SEARCH_KEY,[])
}

export function deleteHistory(){
    storage.clear()
}

export function savePlayer(list){
    storage.set(PLAYER_KEY,list)
    return storage.get(PLAYER_KEY,[])
}

export function getPlayer(){
    return storage.get(PLAYER_KEY,[])
}