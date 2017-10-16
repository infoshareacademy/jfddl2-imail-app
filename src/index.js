import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store'

import App from './App';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App title="instantmailApp"/>,
    document.getElementById('root')
)

registerServiceWorker()






