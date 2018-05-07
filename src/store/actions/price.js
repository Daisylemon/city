import * as types from '../constants/price'

export const changecar =(dat) =>{
    return {
        type:types.CARLIST,
        dat
    }
}

export default changecar