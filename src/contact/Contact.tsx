import React from 'react';
import st from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';
import MyInput from './input/MyInput';
import MyTextArea from './textarea/MyTextArea';

const Contact = () => {
    return <div className={st.contactBlock}>
        <div className={`${styleContainer.container} ${st.contactContainer}`}>

            <h2 className={st.title}>Contact ME</h2>

            <div className={st.contacts}>
                <form action="">
                    <MyInput placeholder={'Name'}/>
                    <MyInput placeholder={'Email'}/>
                    <MyTextArea placeholder={'How can I help you?'}/>
                    <button type="submit" className={st.button}>Send</button>
                </form>

            </div>

        </div>

    </div>;
};


export default Contact;