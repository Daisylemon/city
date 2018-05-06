import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {getarr} from '../../../store/actions/datail'
import {changearr} from '../../../store/actions/datail'


class List extends Component {
    constructor () {
        super()
        this.state = {
            flag: false
        }
    }
    render (){
        const {cityli} = this.props
        return (
            <Fragment>
                <li onClick = {this.getli.bind(this,cityli)} className={this.state.flag ? 'active' : ''}
            >{cityli}</li>
            </Fragment>
        )
    }
    getli(dat){ 
        const { dispatch} = this.props
        if(!this.state.flag){
           this.setState({
                flag:true,
            }) 
            //当flag为true触发action 把上面新的数组传入, 添加
            dispatch(getarr(dat))
        }else{
            // 更新
            this.setState({
                flag:false
            })
            dispatch(changearr(dat))
        }
     }
}

const mapStateToProps = (state,ownProps) =>{
    return {
        reducerName : state.detail.name,
        li:state.detail.LISTDETAIL,
        msg:state.detail
    }
}

export default connect(mapStateToProps)(List)