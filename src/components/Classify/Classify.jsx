import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch} from 'react-router-dom'
import {getCarClass} from '../../api/service'
import {getCar} from '../../store/actions/classify'
import { connect } from 'react-redux'
import './Classify.css'
import Sort from './Sort'
import Price from './Price'
import Brand from './Brand'
import Screen from './Screen'
import Classif from './Classif'
class Classify extends Component {
    render (){
        const {match} = this.props
        return (
            <Router>
                <div>
                    <div className='classify'>
                        <Redirect to={`${match.url}/class`}></Redirect>
                        <Link to={`${match.url}/sort`}>排序 <i className='iconfont selected'></i></Link>
                        <Link to={`${match.url}/price`}>价格 <i className='iconfont selected'></i></Link>
                        <Link to={`${match.url}/brand`}>品牌 <i className='iconfont selected'></i></Link>
                        <Link to={`${match.url}/screen`}>筛选 <i className='iconfont selected'></i></Link>                    
                    </div>
                    <div>
                        <Route path={`${match.url}/class`} component={Classif}></Route>
                        <Route path={`${match.url}/sort`} component={Sort}></Route>
                        <Route path={`${match.url}/price`} component={Price}></Route>
                        <Route path={`${match.url}/brand`} component={Brand}></Route>
                        <Route path={`${match.url}/screen`} component={Screen}></Route>
                       
                    </div>
                </div>
                
            </Router>
            
        )
    }
    componentDidMount(){
        const { dispatch } = this.props
        getCarClass()
            .then((res)=>{
                console.log(res.data,'pppp')
                dispatch(getCar(res.data))
            })
    }
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state.classify)
    return {
        reducerName : state.home.name,
        LIST:state.home.LIST,
        msg:state.detail
    }
}

export default connect(mapStateToProps)(Classify)