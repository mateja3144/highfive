import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from '../Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import GalleryPage from '../GalleryPage';
import TextsPage from '../TextsPage';
import PressPackPage from '../PressPackPage';
import ContactPage from '../ContactPage';
import Footer from '../Footer';
import style from './style.css';

export const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter basename={'#' + window.location.pathname}>
            <div>
                <Header />
                <main className={style.main}>
                    <div className={style.container}>
                        <Switch>
                            <Route path='/o_nas' component={AboutPage} />
                            <Route path='/galeria' component={GalleryPage} />
                            <Route path='/teksty' component={TextsPage} />
                            <Route path='/press-pack' component={PressPackPage} />
                            <Route path='/kontakt' component={ContactPage} />
                            <Route path='/' component={HomePage} />
                        </Switch>
                    </div>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object
};

export default App;
