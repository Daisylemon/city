import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Iconitem extends Component {
    render (){
        const { icon ,name , color} = this.props
        return (
            <div className='iconitem'>
                <p className={icon} style={{color:color}}></p>
                {name}
            </div>
        )
    }
}

Iconitem.propTypes = {
    icon:PropTypes.string,
    name:PropTypes.string
}

export default Iconitem