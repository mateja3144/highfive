import React from 'react';
import style from './style.css';
import logo from '../../../../assets/image/logo.png';

export const Header = () => (
    <header className={style.wrapper}>
        <img className={style.logo} src={logo} />
    </header>
);

Header.propTypes = {
};

export default Header;
