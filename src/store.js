import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const Store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
/* eslint-enable */

export default Store;