import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom'
import './assets/font/iconfont.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mock from './mock'

import { Provider } from 'react-redux'
import store from './store'

if (process.env.NODE_ENV === "development") mock()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
