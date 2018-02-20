import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from '../Header';

export const App = ({ store }) => (
    <Provider store={store}>
        <Header />
    </Provider>
);

App.propTypes = {
    store: PropTypes.object
};

export default App;
