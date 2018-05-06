import React, { Component } from 'react'
import { connect } from 'react-redux'
import './list.css'
import {getProvince} from '../../api/service'
import {listdata} from '../../store/actions/list'


class List extends Component {
    constructor(){
        super()
        this.state={
            citylists:null,
            id:null
        }
    }
    componentDidMount(){
        const { dispatch } = this.props
        getProvince()
            .then((res)=>{
                console.log(res.data,'pppp')
                dispatch(listdata(res.data))
            })
        
    }
    changeClick (item,e) {
        let citylists = this.props.city[item.id];
         this.setState({
            id:item.id,
            citylists
         })
     }
    render (){
        const { citylist,provincearr} = this.props
        const {citylists} = this.state;
        return (
            <div className='list'>
                <div className='left'>    
                    <ul>
                        {
                            citylist !== undefined && citylist.map((item,index) =>{
                                return <li key={index}>{
                                    item.province.map((itm,idx) =>{
                                        return <span key={idx} onClick={this.changeClick.bind(this,itm)}>{itm.name}</span>
                                    })
                                }</li>
                            })
                        }
                    </ul>
                </div>
                <div className='main'>
                    {
                        citylists != null&& citylists.map((item,index)=>{
                            return <span key={index}>{item.name}</span>
                        })
                    }
                </div>
                <div className='right'>
                    <ul>
                        {
                            citylist !== undefined && citylist.map((item,index) =>{
                                return <li key={index}>{item.letter}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}
 
const mapStateToProps = (state,ownProps) =>{
    console.log(state.list.city,'lllllllllllll')
    return {
        reducerName : state.list.name,
        citylist:state.list.provinceArr,
        city:state.list.city
    }
}

export default connect(mapStateToProps)(List)