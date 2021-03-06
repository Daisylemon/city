import React, { Component } from 'react'
import { connect } from 'react-redux'

class Classif extends Component {
    render (){
        const {carlist} = this.props
        return (
            <div>
                {
                     carlist !== null && carlist.map((item,index) =>{
                        return <div key={index}>
                            {
                                item.map((itm,idx)=>{
                                     return <div key={idx}>
                                        {
                                            itm.carList.map((i,x) =>{
                                                return <div key={x}>
                                                    <p>{i.carName}</p>
                                                    <p>{i.price}</p>
                                                </div>
                                            })
                                        }
                                    </div>  
                                })
                            }
                        </div>
                    })
                }
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

export default connect(mapStateToProps)(Classif)