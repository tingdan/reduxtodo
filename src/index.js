import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppMain from './components/AppMain';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)


ReactDOM.render(
    <Provider store={store}>
        <AppMain />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
