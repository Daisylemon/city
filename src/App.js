import React, { Component } from 'react';
import {
    NavLink,
    Route,
    withRouter
  } from 'react-router-dom'
import './App.css'
import { ROUTER_MAP }  from './router/routerMap'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Main from './components/common/Main'
import FooterChild from './components/common/Footer/FooterChild'

class App extends Component {
  render() {
    const {location} = this.props
    return (
      <div className="App">
          <div className='box'>
          <Header/>
            <Main className='section'>
              {
                ROUTER_MAP.ROUTER_VIEW.map((item,index) =>{
                  return (
                    <Route 
                      exact
                      path={item.path} 
                      component={item.component}
                      key={index}>
                    </Route>
                  )
                })
              }
            </Main>
            {
              /\/classify/.test(location.pathname)
              ? ""
              :<Footer className='footer'>
                {
                  ROUTER_MAP.NAV.map((item,index) =>{
                    return (
                      <NavLink 
                        activeClassName={item.active}
                        to={item.to}
                        key={index}>
                        <FooterChild title={item.title} icon={item.icon}></FooterChild>
                      </NavLink>
                    )
                  })
                }
              </Footer>
            }
            
          </div>
      </div>
    );
  }
}

export default withRouter(App);
