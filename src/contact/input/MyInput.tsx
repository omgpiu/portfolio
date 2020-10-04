import React from 'react';
import st from './MyInput.module.css';

export type PropsInputType = {
    placeholder: string


}


const MyInput = (props: PropsInputType) => {
    return <div className={st.myInput}>


        <input type={'text'} placeholder={props.placeholder}/>


    </div>;
};


export default MyInput;