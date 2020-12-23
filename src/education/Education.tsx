import React from 'react';
import st from './Education.module.css';
import styleContainer from '../common/styles/Container.module.css';
import EducationStep from './educationStep/EducationStep';

const Education = () => {
    return <div className={st.educationItemBlock}>
        <div className={`${styleContainer.container} ${st.educationItemContainer}`}>
            <h2 className={st.title}>My education & experience</h2>
            <div className={st.educationItem}>
                <EducationStep title={'This my HTML+CSS Skill'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}
                               year={2010} info={' Secondary School Certificate'}
                />
                <EducationStep title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}
                               year={2010} info={' Secondary School Certificate'}/>
            </div>
            <div className={st.educationItem}>
                <EducationStep title={'This my HTML+CSS Skill'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}
                               year={2010} info={' Secondary School Certificate'}/>
                <EducationStep title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}
                               year={2010} info={' Secondary School Certificate'}/>
            </div>
            <div className={st.educationItem}>
                <EducationStep title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}
                               year={2010} info={' Secondary School Certificate'}/>
                <EducationStep title={'This my JS Skill'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}
                               year={2010} info={' Secondary School Certificate'}/>
            </div>
            <div className={st.educationItem}>
                <EducationStep title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}
                               year={2010} info={' Secondary School Certificate'}/>
                <EducationStep title={'This my JS Skill'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}
                               year={2010} info={' Secondary School Certificate'}/>
            </div>
        </div>
    </div>
        ;
};


export default Education;