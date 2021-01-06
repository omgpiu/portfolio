import React from 'react';
import StickySlider from '../common/stickySlider';
import css from './Services.module.css';

const Services = () => {
    return (
        <div className={css.con}>


            <div className={css.container}>
                <span className={css.title}>Sticky slider</span>
                <div className={css.slider}>
                    <StickySlider/>
                </div>
            </div>
        </div>
    );
};

export default Services;
