import * as types from '../constants/detail'

const initalState = {
    name:'detail',
    detailCommonList:[]
}


const datail = (state = initalState.detailCommonList,action) =>{ 
    switch (action.type) {
        case types.GETCOMMONLIST:
            return [...state,action.detailCommonList]
        case types.CHANGECOMMONLIST:        // 不存在
        if(state.indexOf(action.change) != -1){
            state.splice(state.indexOf(action.change),1)
            console.log(action.change)
        }
            return [...state]
        default :
            return state
    }
}



export default datail

