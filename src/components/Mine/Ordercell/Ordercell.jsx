import React, {Component} from 'react'
import './Ordercell.css'

class Ordercell extends Component {
    render (){
        const {children} = this.props
        return (
            <div className='ordercell'>
                {children}
            </div>
        )
    }
}

export default Ordercell