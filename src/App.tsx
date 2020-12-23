import React, {useLayoutEffect, useState} from 'react';
import './App.module.css';
import Header from './header/Header';
import Main from './Main/Main';
import Skills from './skills/Skills';
import Works from './works/Works';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import About from "./about/About";
import Services from "./services/Services";
import Education from "./education/Education";
import st from './App.module.css'

// window.onscroll = function() {
//     checkMarginToTop();
// };
//
// var nav = document.getElementById("nav");
//
// var sticky = nav.offsetTop;
//
// function checkMarginToTop() {
//     if (window.pageYOffset > sticky) {
//         nav.classList.add("sticky");
//     } else {
//         nav.classList.remove("sticky");
//     }
// }


const App = () => {
        const [scrolledLayout, setScrolledLayout] = useState(false)
        useLayoutEffect(() => {
            console.log(">>>> useLayoutEffect");
            const handleScroll = (e: any) => {
                setScrolledLayout(window.scrollY > 3)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, [])
        return (
            <>

                <div className={`${st.header} ${scrolledLayout ? st.scrolledLayout : ''}`}><Header/></div>
                <Main/>
                <About/>

                <Services/>

                <Skills/>
                <Education/>
                <Works/>
                <Contact/>
                <Footer/>
            </>
        );
    }
;

export default App;
