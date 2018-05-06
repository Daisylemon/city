import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCity} from '../../api/service'
import {getCitys} from '../../store/actions/home'
import './Home.css'
import axios from 'axios'
//getCity  getProvince  getCarClass
const className = 'change'
class Home extends Component {
    render (){
        return (  
            <div className={className}>
               <select name="" id="" onClick = {this.getDetail.bind(this)}>
                    <option value="" >北京</option>
               </select>
            </div>
        )
    }
    getDetail () {
        const { history } = this.props
        history.push({
            pathname:'/detail',
        })
    }
}

Home.defaultProps = {
    classPreFix:'jds'
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state,'oooooo')
    return {
        reducerName : state.home.name,
        LIST:state.home.LIST
    }
}

export default connect(mapStateToProps)(Home)