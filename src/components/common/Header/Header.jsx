import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

@withRouter

class Header extends Component {
    goback(){
        const {history} = this.props
        history.goBack()
    }
    render (){
        const { location } = this.props
        return (
            <div className='header'>
                {
                    /\/classify/.test(location.pathname)
                    ? <span className='iconfont back' onClick={this.goback.bind(this)}></span>
                    : ""
                }
                <input type="text" placeholder='请输入要搜索的东西'/>
                <span className='login'>登录</span>
            </div>
        )
    }
}

export default Header