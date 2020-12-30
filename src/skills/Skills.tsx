import React from 'react';
import st from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ProgressCircle from "../common/progress/progressbar";

const Skills = () => {
    return <div className={st.skillsBlock}>
        <div className={`${styleContainer.container} ${st.skillsContainer}`}>
            <h2 className={st.title}>My skills</h2>
            <div className={st.skills}>
                <ProgressCircle title={'JavaScript'} style={{strokeDashoffset: '200'}} percent={80}/>
                <ProgressCircle title={'React'} style={{strokeDashoffset: '155'}} percent={50}/>
                <ProgressCircle title={'Typescript'} style={{strokeDashoffset: '250'}} percent={80}/>
                <ProgressCircle title={'Redux'} style={{strokeDashoffset: '400'}} percent={70}/>
            </div>
        </div>

    </div>;
};


export default Skills;