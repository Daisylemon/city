import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route} from 'react-router-dom'

const Aaa = ()=>{
    return (
        <div>1233132123</div>
    )
}
class Classify extends Component {
    render (){
        const {match} = this.props
        return (
            <Router>
                <div>
                    <Link to={`${match.url}/a`}>aaa</Link>
                    <Route path={`${match.url}/:id`} component={Aaa}></Route>
                </div>
            </Router>
            
        )
    }
}

export default Classify