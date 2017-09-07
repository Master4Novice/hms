import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {routerReducer, routerMiddleware } from "react-router-redux";
import {Router} from 'react-router';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import userRegistrationReducer from "./reducers/userRegistration";
import AuthReducer from './reducers/auth_reducer';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({
    userRegistration: userRegistrationReducer,
    router: routerReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger,middleware, thunk))
);

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <div>
                <App />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
