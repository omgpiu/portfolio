import React, {useLayoutEffect, useState} from 'react';
import st from './Header.module.css'
import Nav from '../nav/Nav';


const Header = () => {
    const [scrolledLayout, setScrolledLayout] = useState(false)
    useLayoutEffect(() => {
        console.log(">>>> useLayoutEffect");

        const handleScroll = (e: any) => {
            setScrolledLayout(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return <>


        <div className={st.item}>ALEX DUBROVSKII</div>
        <div className={st.item}>
            <Nav/>
        </div>


    </>
}


export default Header