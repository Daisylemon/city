import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch} from 'react-router-dom'
import Height from './Height'
import Low from './Low'
class Sort extends Component {
    render (){
        const {carlist,match} = this.props
        console.log(match,'ggggggggggggg')
        return (
            <div>
                <p><Link to={`${match.url}/height`}>价格最高 </Link></p>
                <p><Link to={`${match.url}/low`}>价格最低</Link></p>
               <div>
                    <Route path={`${match.url}/height`} component={Height}></Route>
                    <Route path={`${match.url}/low`} component={Low}></Route>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state.classify.CARS,'kkkkkkk')
    return {
        reducerName : state.home.name,
        carlist:state.classify.CARS
    }
}

export default connect(mapStateToProps)(Sort)