import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Price.css'
import {changecar} from '../../../store/actions/price'

class Price extends Component {
    render (){
        const {carlist} = this.props
        return (
            <div className='price'>
                {
                     carlist !== undefined && carlist.map((item,index) =>{
                        return <ul key={index}>
                            {
                                item.map((itm,idx)=>{
                                     return <li key={idx} onClick={this.showlist.bind(this,itm.carClass)}>
                                        {itm.carClass}
                                    </li>  
                                })
                            }
                        </ul>
                    })
                }
            </div>
        )
    }
    showlist(cars){
        const { dispatch } = this.props
        dispatch(changecar(cars))
    }
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state.price,'哈哈哈哈哈哈哈')
    return {
        reducerName : state.home.name,
        carlist:state.classify.CARS
    }
}

export default connect(mapStateToProps)(Price)