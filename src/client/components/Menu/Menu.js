import React from 'react';
import style from './style.css';
import { withRouter } from 'react-router-dom';

const buttons = [
    {
        label: 'aktualności',
        link: '/'
    },
    {
        label: 'o nas',
        link: '/o_nas'
    },
    {
        label: 'galeria',
        link: '/galeria'
    },
    {
        label: 'teksty',
        link: '/teksty'
    },
    {
        label: 'press-pack',
        link: '/press-pack'
    },
    {
        label: 'kontakt',
        link: '/kontakt'
    }
];

const Menu = withRouter((props) => {
    const goTo = (link) => {
        props.history.push(link);
    };

    return (
        <nav>
            <ul className={style.list}>
                {buttons.map((row, index) => (
                    <li key={index}>
                        <button className={style.button} onClick={() => {
                            goTo(row.link);
                        }}>{row.label}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
});

Menu.propTypes = {
};

export default Menu;
export { Menu };
