import React from 'react';
import st from './Price.module.css';


type PropsType = {
    title: string
    support: string
    price: string
    plan: string
    available: string
}


const Price: React.FC<PropsType> = ({title, support, price, plan, available}) => {
    return <div className={st.block}>


        <h2>{title}</h2>
        <h3>{price}</h3>
        {plan}
        <p>One Psd Design</p>
        <p>One Html Template</p>
        <p>Responsive Design</p>
        <p>{support}</p>
        {price === '$2000' ? <p>{available}</p> : <p><s>{available}</s></p>}


    </div>;
};


export default Price;