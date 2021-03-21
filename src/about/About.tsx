import React from 'react';
import st from './About.module.css';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../common/photo/about/about.png'

const About = () => {
    return <section className={st.section__about}>
        <div className={styleContainer.container}>
            <div className={st.about__wrap}>
                <h1>About me</h1>
                <p>I am Anha Malik from united State. I am completed my graduation in bachelor degree. Beside this, I am
                    trained in Web Development and love to code using HTML5, CSS3, WordPress & PHP. I am also taking
                    course about Digital Marketing. I am a person who is positive in every aspect of life.</p>
                <button className={st.about__btn}>Download CV</button>
            </div>
            <img src={myPhoto} alt="About" className={st.about__img}/>
        </div>


    </section>;
};


export default About;