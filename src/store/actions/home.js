import * as types from '../constants/home'

export const getCitys = (data) => {
    return {
        type:types.LIST,
        LIST:data
    }
} 