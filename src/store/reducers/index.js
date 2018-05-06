import { combineReducers } from 'redux'
import home from './home'
import classify from './classify'
import list from './list'
import shopcar from './shopcar'
import year from './year'
import detail from './detail'

const rootReducer = combineReducers ({
    home,
    classify,
    list,
    shopcar,
    year,
    detail
})

export default rootReducer