import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import {Router} from 'react-router';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import ReduxModal from 'react-redux-modal';

import reducers from './reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger,middleware, thunk))
);

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <div>
                <App />
                <ReduxModal />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
