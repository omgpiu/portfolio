import React from 'react';
import st from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../common/photo/MyPhoto.png'

const Main = () => {
    return <div className={st.mainBlock}>
        <div className={styleContainer.container}>
            <div className={st.greeting}>
                <h1>Hi! I'm Alex.</h1>
                <p>Creative Designer & Frontend developer</p>
                <p>187015,Saint-Petersburg, Russia</p>
                <p>01872 - 12 34 56</p>
                <p> yourmail@mail.com</p>

                <p>Specialized in ReactJS,TypeScript</p>
            </div>
            <img src={myPhoto} alt="My photo" className={st.photo}/>
        </div>


    </div>;
};


export default Main;