import React from 'react';
import st from './Education.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ItemBlock from './skill/EducationStep';

const Education = () => {
    return <div className={st.educationItemBlock}>
        <div className={`${styleContainer.container} ${st.educationItemContainer}`}>
            <h2 className={st.title}>My education experience</h2>
            <div className={st.educationItem}>

                <ItemBlock title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}/>
                <ItemBlock title={'This my JS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <ItemBlock title={'This my HTML+CSS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>
                <ItemBlock title={'This my React Skill'} description={'Lorem ipsum dolor sit amet.'}/>
                <ItemBlock title={'This my JS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <ItemBlock title={'This my HTML+CSS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>
                <ItemBlock title={'This my JS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}/>
                <ItemBlock title={'This my HTML+CSS Skill'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia, voluptates?'}/>

            </div>
        </div>

    </div>;
};


export default Education;