import axios from 'axios'
import {CITY,PROVINCECITY,CARCLASS} from './interface'

export const getCity = ()=>{
    return axios.get(CITY) 
}

export const getProvince = ()=>{
    return axios.get(PROVINCECITY) 
}

export const getCarClass = ()=>{
    return axios.get(CARCLASS) 
}
