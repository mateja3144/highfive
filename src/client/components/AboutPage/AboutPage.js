import React from 'react';
import style from './style.css';

export const AboutPage = () => (
    <section className={style.section}>
        <h2 className={style.title}>O nas</h2>
        <article className={style.article}>
            Zaczynaliśmy od coverów. Dotarliśmy się na
            cudzym, ale od początku chcieliśmy robić
            coś swojego i na tym etapie znaleźliśmy się
            około 3 lata temu. Każdy z nas trochę tęskni
            za muzyką z przeszłości, ale każdy za inną –
            dzięki temu unikamy powielania utartych
            schematów i tworzymy coś, czego jeszcze
            nie było. Mamy wiele wizji i pomysłów,
            różne osobowości i dużo chęci – taka
            mieszanka daje naprawdę dobry efekt
            muzyczny. Kiedy okazało się, że nie jest-
            eśmy w tej opinii sami i że ludziom – zarów-
            no publice jak i innym artystom – podoba
            się to, co robimy, postanowiliśmy spełnić
            swoje, zadawało by się, nierealne marzenie i
            pójść do studia. Nagraliśmy 4 kawałki,
            również dzięki fantastycznemu i bardzo
            otwartemu realizatorowi.
            Każdy z nas ma nieco inną wizję od czego
            zespół powinien się zacząć oraz do czego
            powinien dążyć. Zależy nam na występach
            na żywo, bo tam możemy dać upust ży-
            wiołom, które kształtują nas i naszą muzykę
            oraz naładować się energią bawiącej się
            publiczności. Nie lubimy iść na łatwiznę,
            dlatego zarówno w warstwie tekstowej jak i
            muzycznej staramy się przekazać coś, co
            jest tworem naszych indywidualnych potr-
            zeb i przekonań. Wierzymy, że muzyka jest
            najpiękniejszą ze sztuk i że, jak każda
            sztuka, ma dać odbiorcy zarówno radość i
            energię jak i skłonić do myślenia, a przede
            wszystkim zaciekawić. Wierzymy, że „duch
            rockendrolla” nie umarł i że muzyka może
            być całym życiem, i to życiem naprawdę
            pełnym.
        </article>
    </section>
);

AboutPage.propTypes = {
};

export default AboutPage;
