export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

const MAX_NUM = 9999
const Rand = 5
const HAN = '万'

export function getPlay(state){
    if(state > MAX_NUM){
        let str = state + ''
        for(let i=0;i<str.length;i++){
            let first = str[0]
            let last = str[1]

            if(last >= Rand){
                return first + 1 + HAN
            }else{
                return first + HAN
            }
        }
    }else{
        return state
    }
}

