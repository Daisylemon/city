import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCity} from '../../api/service'
import {getCitys} from '../../store/actions/home'
import {changearr} from '../../store/actions/datail'

import axios from 'axios'
import './Detail.css'
import Lis from './cityItem'
//getCity  getProvince  getCarClass
const className = 'change'
class Detail extends Component {  
    constructor(){
        super()
        this.state={
            flag:false
        }
    }
    
    render (){
        const { LIST , classPreFix, msg} = this.props
        return (  
            <div className={className+' '+ classPreFix}>
                <p className='upadd'><span>您的上牌地址</span><span  onClick = {this.getlist.bind(this)}>></span></p>
                <div>
                    <p>您已选择的城市</p>
                    <ul>
                        {
                            msg !== null && msg.map((itm,idx) =>{
                                return <li key={idx}  onClick = {this.deleli.bind(this,itm)}>{itm}</li>
                            })
                        }
                        
                    </ul>
                </div>
                {
                    LIST !==null && LIST.map((item,index) =>{
                        return <div key={index}>
                                    <h3>{item.letter}</h3>
                                    <ul>                                       
                                        {
                                            item.city.map((itm,idx) =>{
                                                return <Lis  key={idx}  cityli={itm.province}></Lis>
                                            })
                                        }
                                    </ul>
                                </div> 
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        const { dispatch } = this.props
        getCity()
            .then((res)=>{
                console.log(res.data,'pppp')
                dispatch(getCitys(res.data))
            })
    }
    getlist () {
        const { history , imageurl , wname} = this.props
        history.push({
            pathname:'/list',
        })
    }
    deleli(dat){
        const { dispatch } = this.props
        dispatch(changearr(dat))
    }
    
}

const mapStateToProps = (state,ownProps) =>{
    
    return {
        reducerName : state.home.name,
        LIST:state.home.LIST,
        msg:state.detail
    }
}

export default connect(mapStateToProps)(Detail)