import React from 'react';
import style from './style.css';
import logo from '../../../../assets/image/logo.png';
import Menu from '../Menu';

export const Header = () => (
    <header className={style.wrapper}>
        <img className={style.logo} src={logo} />
        <Menu />
    </header>
);

Header.propTypes = {
};

export default Header;
