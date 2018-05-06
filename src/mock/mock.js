import axios from 'axios'
import AxiosMockAdpater from 'axios-mock-adapter'
import carClass from './data/carClass'
import city from './data/city'
import provinceCity from './data/provinceCity'


const mock = new AxiosMockAdpater(axios)

const jdData = () => {
    mock.onGet('/api/carClass').reply((config) =>{
        return new Promise((resolve,reject) =>{
            resolve([200,carClass])
        })
    })
    mock.onGet('/api/city').reply((config) =>{
        return new Promise((resolve,reject) =>{
            resolve([200,city])
        })
    })
    mock.onGet('/api/provinceCity').reply((config) =>{
        return new Promise((resolve,reject) =>{
            resolve([200,provinceCity])
        })
    })
}


export default jdData