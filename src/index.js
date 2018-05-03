import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';

// import Game from './components/game';
import Play from './components/play';
// import Login from './components/login-dialog';

import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render(

    <Provider store={Store}>
        <Play />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
