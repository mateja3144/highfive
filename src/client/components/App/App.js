import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export const App = ({ store }) => (
    <Provider store={store}>
        <h1>Hello</h1>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object
};

export default App;
