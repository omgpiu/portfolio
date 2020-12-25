import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
// import 'react-id-swiper/lib/styles/css/swiper.css'
// import 'swiper/css/swiper.css' from 'Swiper'
import data from '../data/data.json'
import Slide from './Slide'
import 'swiper/swiper.scss'

const StickySlider = () => {
    const [swiper, updateSwiper] = useState(null as any);
    const [translate, updateTranslate] = useState(0);
    const [transition, updateTransition] = useState(0);

    const params = {
        slidesPerView: 3,
    };

    useEffect(() => {
        if (swiper) {
            swiper.on('setTranslate', (t: any) => {
                updateTranslate(t);
            });
            swiper.on('setTransition', (t: any) => {
                updateTransition(t);
            });
        }
    }, [swiper]);

    return (
        //@ts-ignore
        <Swiper getSwiper={updateSwiper} {...params}>
            {data.map((item, idx) => (
                <div key={idx}>
                    <Slide
                        translate={translate}
                        transition={transition}
                        color={item.color}
                    >
                        {item.title}
                    </Slide>
                </div>
            ))}
        </Swiper>
    );
};

export default StickySlider;