import React from 'react';
import st from './MyWork.module.css';


type PropsType = {
    title: string
    description: string
    photo: string
}


const MyWork = (props: PropsType) => {
    return <div className={st.myWork}>

        <div className={st.icon}>
            <img src={props.photo} alt="WebDesignFirstPhoto"/>
        </div>
        <h4>{props.title}</h4>
        <div className={st.description}>
            <p>{props.description} </p>
        </div>

    </div>;
};


export default MyWork;