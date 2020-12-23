import React from 'react';
import st from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import MySkill from './skill/MySkill';
import ProgressCircle from "../common/progress/progressbar";

const Skills = () => {
    return <div className={st.skillsBlock}>
        <div className={`${styleContainer.container} ${st.skillsContainer}`}>
            <h2 className={st.title}>My skills</h2>
            <div className={st.skills}>
                {/*<MySkill title={'JavaScript'} description={'Lorem ipsum dolor sit amet.'}/>*/}
                {/*<MySkill title={'CSS'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>*/}
                {/*<MySkill title={'React'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>*/}
                {/*<MySkill title={'Redux'} description={'Lorem ipsum dolor sit amet.'}/>*/}
                {/*<MySkill title={'Typescript'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>*/}
                {/*<MySkill title={'Redux-toolkit'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>*/}
                {/*<MySkill title={'HTML'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>*/}
                {/*<MySkill title={'Material UI'}*/}
                {/*         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>*/}
                <ProgressCircle/>
                <ProgressCircle/>
                <ProgressCircle/>
                <ProgressCircle/>
            </div>
        </div>

    </div>;
};


export default Skills;