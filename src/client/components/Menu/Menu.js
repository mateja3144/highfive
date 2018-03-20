import React from 'react';
import style from './style.css';
import { withRouter } from 'react-router-dom';

const buttons = [
    {
        label: 'Aktualności',
        link: '/'
    },
    {
        label: 'O nas',
        link: '/onas'
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
                    <li className={style.button} key={index}>
                        <button onClick={() => {
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
