import React from 'react';
import st from './About.module.css';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../common/photo/about.png'

const About = () => {
    return <div className={st.mainBlock}>
        <div className={styleContainer.container}>
            <div className={st.greeting}>
                <h1>About me</h1>
                <p>I am Anha Malik from united State. I am completed my graduation in bachelor degree. Beside this, I am
                    trained in Web Development and love to code using HTML5, CSS3, WordPress & PHP. I am also taking
                    course about Digital Marketing. I am a person who is positive in every aspect of life.</p>
                <button className={st.btn}>Download CV</button>
            </div>

            <img src={myPhoto} alt="About" className={st.photo}/>
        </div>


    </div>;
};


export default About;