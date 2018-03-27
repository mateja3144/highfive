import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from '../Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

export const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter basename={'#' + window.location.pathname}>
            <div>
                <Header />
                <Switch>
                    <Route path='/o_nas' component={AboutPage} />
                    <Route path='/' component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object
};

export default App;
