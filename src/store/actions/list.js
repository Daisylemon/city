import * as types from '../constants/list'

export const listdata =(citylists) =>{
    return {
        type:types.CITYLIST,
        citylists
    }
}

export default listdata