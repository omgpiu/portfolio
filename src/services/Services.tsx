import React from 'react';
import StickySlider from '../common/stickySlider'
import css from './Services.module.scss'

const Services = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Sticky slider</h1>
            <div className={css.slider}>
                <StickySlider/>
            </div>
        </div>
    );
};

export default Services;