import React from 'react';
import st from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import MySkill from './skill/MySkill';

const Skills = () => {
    return <div className={st.skillsBlock}>
        <div className={`${styleContainer.container} ${st.skillsContainer}`}>
            <h2 className={st.title}>My skills</h2>
            <div className={st.skills}>

                <MySkill title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}/>
                <MySkill title={'This my JS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <MySkill title={'This my HTML+CSS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>
                <MySkill title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}/>
                <MySkill title={'This my JS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <MySkill title={'This my HTML+CSS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>
                <MySkill title={'This my JS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <MySkill title={'This my HTML+CSS Skill'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>

            </div>
        </div>

    </div>;
};


export default Skills;