
import {LIST} from '../constants/home'

const initalState = {
    name:'home',
    LIST:null
}

const home = (state = initalState,action) =>{
    switch(action.type){
        case LIST:
            return {...state,LIST:action.LIST}
        default :
            return state 
    }
    
}

export default home