import React from 'react';
import st from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';


const Footer = () => {
    return <div className={st.footerWrapper}>


        <div className={`${styleContainer.container} ${st.footerContainer}`}>

            <h4>{'Alex Dubrovskii'}</h4>
            <div className={st.footerBlocks}>
            <div className={st.footerItem}>
                <h5>Alex</h5>
                <span>lorem Ipsum donor sit.</span>
            </div>
            <div className={st.footerItem}>
                <h5>Phone No.</h5>
                 <span>(+1) 123 456 7890</span>
            </div>
            <div className={st.footerItem}>
                <h5>Email</h5>
                <span>info@example.com</span>

            </div>
            <div className={st.footerItem}>
                <h5>Address</h5>
                <span>123 lorem ipsum New York, USA.</span>

            </div>
            </div>

            <div className={st.description}>
                <p>{'Alex © 2020. All Right Reserved, Designed By Alex Dubrovskii.'} </p>
            </div>

        </div>
    </div>;
};


export default Footer;