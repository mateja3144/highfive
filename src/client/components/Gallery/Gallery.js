import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';

export const Gallery = (props) => (
    <section className={style.container}>
        {props.children}
    </section>
);

Gallery.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default Gallery;
