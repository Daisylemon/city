import {CARLIST} from '../constants/price'

const initalState = {
    name:'price',
    CARLIST:null
}

const price = (state = initalState,action) =>{
    switch(action.type){
        case CARLIST:

        return {...state,CARLIST:action.dat}
        default :
            return state 
    }
}

export default price

