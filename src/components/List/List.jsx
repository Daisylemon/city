import React, { Component } from 'react'
import { connect } from 'react-redux'
import './list.css'
import {getProvince} from '../../api/service'
import {listdata} from '../../store/actions/list'
import BScroll from 'better-scroll';


class List extends Component {
    constructor(){
        super()
        this.state={
            citylists:null,
            id:null,
            scroll: null,
            ind:0
        }
    }
    componentDidMount(){
        const { dispatch } = this.props
        getProvince()
            .then((res)=>{
                console.log(res.data,'pppp')
                dispatch(listdata(res.data))
            })


        const options = {
            scrollY: true, 
            click: true
        }
    
    
        let leftCity = this.refs.leftCity;
        this.setState({
            scroll: new BScroll(leftCity, options)
        })
    }
    changeClick (item,e) {
        let citylists = this.props.city[item.id];
         this.setState({
            id:item.id,
            citylists
         })
     }
     scrollClick (index) {
        this.setState({
          ind: index
        })
        let arrs = []
        let arrTop = this.refs.leftCity.querySelectorAll('.every');
        for (let i = 0; i < arrTop.length; i++) {
          arrs.push(arrTop[i].offsetTop);
        }
        this.state.scroll.scrollTo(0, -arrs[index], 1000);
    }
    render (){
        const { citylist,provincearr} = this.props
        const {citylists} = this.state;
        return (
            <div className='list'>
            <div className='leftCity' id="leftCity" ref='leftCity'>
                <div className='left'>    
                    <ul>
                        {
                            citylist !== undefined && citylist.map((item,index) =>{
                                return <li key={index} className='every'>{
                                    item.province.map((itm,idx) =>{
                                        return <span key={idx} onClick={this.changeClick.bind(this,itm)}>{itm.name}</span>
                                    })
                                }</li>
                            })
                        }
                    </ul>
                </div>
            </div>
                <div className='main '>
                    {
                        citylists != null&& citylists.map((item,index)=>{
                            return <span key={index} >{item.name}</span>
                        })
                    }
                </div>
                <div className='right'>
                    <ul>
                        {
                            citylist !== undefined && citylist.map((item,index) =>{
                                return <li key={index} onClick={this.scrollClick.bind(this,index)}>{item.letter}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}
 
const mapStateToProps = (state,ownProps) =>{
    console.log(state.list.city,'lllllllllllll')
    return {
        reducerName : state.list.name,
        citylist:state.list.provinceArr,
        city:state.list.city
    }
}

export default connect(mapStateToProps)(List)