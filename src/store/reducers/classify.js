
import {CARLIST} from '../constants/classify'

const initalState = {
    name:'classify',
    CARS:null
}

const classify = (state = initalState,action) =>{
    switch(action.type){
        case CARLIST:
            return {...state,CARS:action.carlist}
        default :
            return state 
    }
    
}


export default classify