import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './FooterChild.css'

const className = 'footer-child'

class FooterChild extends Component {
    render (){
        const {icon, title} = this.props
        return (
            <div className={className}>
                <p className={icon}></p>
                {title}
            </div>
        )
    }
}

// FooterChild.PropTypes = {
//     icon : PropTypes.string,
//     title : PropTypes.string
// }

export default FooterChild