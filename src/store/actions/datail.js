import * as types from '../constants/detail'

export const getarr =(detailCommonList) =>{
    return {
        type:types.GETCOMMONLIST,
        detailCommonList
    }
}
//用来获取当flag为true传入的数组 一直在push在改变
export const changearr =(change) =>{
    return {
        type:types.CHANGECOMMONLIST,
        change
    }
}
 