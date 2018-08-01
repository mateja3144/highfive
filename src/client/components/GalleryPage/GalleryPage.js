import React from 'react';
import style from './style.css';
import Gallery from '../Gallery';
import Album from '../Album';

export const GalleryPage = () => (
    <section className={style.section}>
        <h2 className={style.title}>Galeria</h2>
        <Gallery>
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
            <Album thumbnail="https://vignette.wikia.nocookie.net/naruto/images/5/5f/White_Zetsu.png/revision/latest?cb=20150819192239" />
        </Gallery>
    </section>
);

GalleryPage.propTypes = {
};

export default GalleryPage;
