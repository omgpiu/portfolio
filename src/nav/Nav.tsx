import React from 'react';
import st from './Nav.module.css';


const Nav = () => {
    const navArray = ['HOME', 'ABOUT', 'SERVICES', 'WORKS', 'BLOG', 'CONTACT']
    return <div>
        {/*<a href="https://www.google.com/">HOME</a>*/}
        {/*<a href="https://www.google.com/">ABOUT</a>*/}
        {/*<a href="https://www.google.com/">SERVICES</a>*/}
        {/*<a href="https://www.google.com/">WORKS</a>*/}
        {/*<a href="https://www.google.com/">BLOG</a>*/}
        {/*<a href="https://www.google.com/">CONTACT</a>*/}
        <ul className={st.nav}>
            {navArray.map(el =>
                <ol>{el}</ol>)}
        </ul>


    </div>;
};


export default Nav;