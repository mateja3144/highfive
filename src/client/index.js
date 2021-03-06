import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'normalize.css';
import './style.css';

import reducers from './reducers';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(thunk));

injectTapEventPlugin();
ReactDOM.render(<App store={store} />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;

        ReactDOM.render(<NewApp store={store} />, document.getElementById('app'));
    });
}
