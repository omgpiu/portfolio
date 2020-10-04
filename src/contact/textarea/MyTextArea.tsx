import React from 'react';
import st from './MyTextArea.module.css';
import {PropsInputType} from '../input/MyInput';


const MyTextArea = (props: PropsInputType) => {
    return <div className={st.MyTextArea}>

        <textarea placeholder={props.placeholder}>

        </textarea>

    </div>;
};


export default MyTextArea;