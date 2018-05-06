import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Title from './Title'
import Iconitem from './Common/Iconitem'
import Ordercell from './Ordercell'


class Mine extends Component {
    constructor(){
        super()
        this.state = {
            footerItem:[
                {
                    icon:'iconfont email',
                    name:'首页',
                    color:'red'
                },{
                    icon:'iconfont favorite',
                    name:'首页',
                    color:'pink'
                },{
                    icon:'iconfont form',
                    name:'首页',
                    color:'aqua'
                },{
                    icon:'iconfont help',
                    name:'首页',
                    color:'green'
                },{
                    icon:'iconfont information',
                    name:'首页',
                    color:'yellow'
                }
            ]
        }
    }
    render (){
        const {footerItem} = this.state
        return (
            <div>
                <Header></Header>
                <Main>
                    <Title></Title>
                    <Ordercell>
                        {
                            footerItem.map((item,idx)=>{
                                return <Iconitem key={idx} icon={item.icon} name={item.name}></Iconitem>
                            })
                        }
                    </Ordercell>
                    <Ordercell>
                        {
                            footerItem.map((item,idx)=>{
                                return <Iconitem key={idx} icon={item.icon} name={item.name} color={item.color}></Iconitem>
                            })
                        }
                    </Ordercell>
                </Main>
                <Footer>
                    {
                        footerItem.map((item,idx)=>{
                            return <Iconitem key={idx} icon={item.icon} name={item.name}></Iconitem>
                        })
                    }
                </Footer>
            </div>
        )
    }
}

export default Mine