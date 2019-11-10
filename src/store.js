import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const enhancer = applyMiddleware(thunk, logger);

const store = createStore(reducers, enhancer);
export default store;
