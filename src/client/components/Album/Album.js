import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';

export const Album = (props) => {
    const tab = Array(props.shadows || 2).fill(true);

    return (
        <article className={style.container}>
            <img src={props.thumbnail} className={style.thumbnail} />
            {tab.map((val, index) => (
                <div key={index} className={style.shadow} style={{
                    top: 5 * (index + 1) + 'px',
                    left: 5 * (index + 1) + 'px'
                }} />
            ))}
        </article>
    );
};

Album.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    shadows: PropTypes.number
};

export default Album;
