import React from 'react';
import st from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ProgressCircle from "../common/progress/progressbar";

const Skills = () => {
    return <div className={st.skillsBlock}>
        <div className={`${styleContainer.container} ${st.skillsContainer}`}>
            <h2 className={st.title}>My skills</h2>
            <div className={st.skills}>
                <ProgressCircle title={'JavaScript'}/>
                <ProgressCircle title={'React'}/>
                <ProgressCircle title={'Typescript'}/>
                <ProgressCircle title={'Redux'}/>
            </div>
        </div>

    </div>;
};


export default Skills;