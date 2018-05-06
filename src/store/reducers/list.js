import {CITYLIST} from '../constants/list'

const initalState = {
    name:'list',
    CITYLIST:null
}

const list = (state = initalState,action) =>{
    switch(action.type){
        case CITYLIST:
            return action.citylists
        default :
            return state 
    }
}

export default list

