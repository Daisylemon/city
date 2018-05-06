import React, {Component} from 'react'
import './Title.css'

class Title extends Component {
    render (){
        return (
            <div className='title'>
                <div>我的订单</div>
                <div>
                    <span>查看全部 ></span>
                </div>
            </div>
        )
    }
}

export default Title