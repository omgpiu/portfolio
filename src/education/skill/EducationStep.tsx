import React from 'react';
import st from './EducationStep.module.css';

type PropsType = {
    title: string
    description: string
}


const EducationStep = (props: PropsType) => {
    return <div className={st.mySkill}>
        <h4>{props.title}</h4>
        <div className={st.icon}>
            <img src="https://simpleicon.com/wp-content/uploads/rocket.png" alt="Icon"/>
        </div>
        <div className={st.description}>
            <p>{props.description} </p>
        </div>


    </div>;
};


export default EducationStep;