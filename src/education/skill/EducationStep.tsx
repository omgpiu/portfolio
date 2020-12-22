import React from 'react';
import st from './EducationStep.module.css';

type PropsType = {
    title: string
    info: string
    description: string
    year: number


}


const EducationStep: React.FC<PropsType> = ({title, description, info, year}) => {
    return <div className={st.item}>
        <h3>{title}</h3>
        <h4>{year}--{info}</h4>
        <div className={st.description}>
            <p>{description} </p>
        </div>


    </div>;
};


export default EducationStep;