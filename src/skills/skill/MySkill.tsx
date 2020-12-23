import React from 'react';
import st from './MySkill.module.css';

type PropsType = {
    title: string
    description?: string
}


const MySkill = (props: PropsType) => {
    return <div className={st.mySkill}>
        <h4>{props.title}</h4>
        <div className={st.icon}>
            <img src="https://simpleicon.com/wp-content/uploads/rocket.png" alt="Icon"/>
        </div>
        {/*<div className={st.description}>*/}
        {/*    <p>{props.description} </p>*/}
        {/*</div>*/}


    </div>;
};


export default MySkill;