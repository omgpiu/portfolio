import React from 'react';
import st from './Header.module.css'
import Nav from '../nav/Nav';


const Header = () => {
    return <div className={st.st}>

        <div className={st.header}>
            <div className={st.item}>ALEX DUBROVSKII</div>
            <div className={st.item}>
                <Nav/>
            </div>
        </div>


    </div>
}


export default Header