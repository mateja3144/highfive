import React from 'react';
import style from './style.css';

const events = [
    {
        date: '28 X 2017',
        place: 'Gruba Blues',
        city: 'Chorzów'
    },
    {
        date: '12 XII 2017',
        place: 'Dni Piekar Śląskich',
        city: 'Piekary Śląskie'
    },
    {
        date: '03 III 2017',
        place: 'Festyn Sportowy',
        city: 'Park Murckowski'
    }
];

export const HomePage = () => (
    <section className={style.section}>
        <h2 className={style.title}>Gdzie gramy ?</h2>
        <div className={style.events}>
            28 X 2017 ---- Gruba Blues ---- Chorzów<br/>
            12 X 2017 ---- Dni Piekary Śląskich ---- Piekary Śląskie<br/>
            28 X 2017 ---- Festyn Sportowy ---- Park Murckowski<br/>
        </div>
    </section>
);

HomePage.propTypes = {
};

export default HomePage;
