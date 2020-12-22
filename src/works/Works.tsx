import React from 'react';
import st from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import MyWork from './work/MyWork';
import socialNetworkPhoto from './work/workimg/mini_socialnetwork.jpg';
import ToDoAppPhoto from './work/workimg/newtodo.png';
import CounterApp from './work/workimg/newcounter.png'


const Works = () => {
    return <div className={st.worksBlock}>
        <div className={`${styleContainer.container} ${st.worksContainer}`}>
            <h2 className={st.title}>Recent works</h2>
            <div className={st.works}>

                <MyWork title={'SocialNetWork'} description={'Lorem ipsum dolor sit amet.'}
                        photo={socialNetworkPhoto}/>
                <MyWork title={'ToDolist App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}
                        photo={ToDoAppPhoto}/>
                <MyWork title={'Counter App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatibus.'}
                        photo={CounterApp}/>

            </div>
        </div>

    </div>;
};


export default Works;