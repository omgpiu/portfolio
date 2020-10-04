import React from 'react';
import st from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return <div className={st.mainBlock}>
        <div className={styleContainer.container}>
            <div className={st.greeting}>
                <h1>Hi! I'm Alex.</h1>
                <span>Creative Designer & Developer located in Saint-Petersburg.</span>

                <p>Specialized in ReactJS,TypeScript</p>
            </div>
            <div className={st.photo}> MAmam</div>
        </div>


    </div>;
};


export default Main;