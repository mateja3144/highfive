import React from 'react';
import style from './style.css';

export const Footer = () => (
    <footer className={style.footer}>
        Copyright © 2018 Zespoł Highfive  <a className={style.a} href="mailto:highfiveofficial1@gmail.com">Kontakt</a><br/>
    </footer>
);

Footer.propTypes = {
};

export default Footer;
