import React, {Component} from 'react'

class Main extends Component {
    render (){
        const { children} = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default Main