import * as types from '../constants/classify'

export const getCar = (carlist) => {
    return {
        type:types.CARLIST,
        carlist
    }
} 

export default getCar