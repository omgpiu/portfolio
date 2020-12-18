import React from 'react';
import st from './Nav.module.css';

export const HOME_PATH = "https://www.google.com/"
export const ABOUT_PATH = "https://www.google.com/"
export const SERVICES_PATH = "https://www.google.com/"
export const WORKS_PATH = "https://www.google.com/"
export const BLOG_PATH = "https://www.google.com/"
export const CONTACTS_PATH = "https://www.google.com/"

const Nav = () => {

    const navArray = [
        <a href={HOME_PATH}>HOME</a>,
        <a href={ABOUT_PATH}>ABOUT</a>,
        <a href={SERVICES_PATH}>SERVICES</a>,
        <a href={WORKS_PATH}>WORKS</a>,
        <a href={BLOG_PATH}>BLOG</a>,
        <a href={CONTACTS_PATH}>CONTACTS</a>]
    return <div>

        <ul className={st.nav}>
            {navArray.map((el, i) =>
                <ol key={i}>{el}</ol>)}
        </ul>
    </div>;
};

export default Nav;