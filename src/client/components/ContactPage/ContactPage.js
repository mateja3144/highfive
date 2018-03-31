import React from 'react';
import style from './style.css';

export const ContactPage = () => (
    <section className={style.section}>
        <h2 className={style.title}>Kontakt</h2>
        <article className={style.article}>
            <div id="top" className={style.top}>
                Jesteśmy otwarci na wszelkiego rodzaju współpracę.<br/>
                Zapraszamy do kontaktu mailowego i telefonicznego.<br/>
                Odwiedź nas również na naszym profilu na facebooku.
            </div>
            Dane kontaktowe:<br/>
            Tel: 123 456 789<br/>
            <a className={style.a} href="mailto:highfiveofficial1@gmail.com">highfiveofficial1@gmail.com</a><br/>
            <a className={style.a} href="https://www.facebook.com/zespolhighfive/">Fanpage Facebook</a><br/>
        </article>
    </section>
);

ContactPage.propTypes = {
};

export default ContactPage;
