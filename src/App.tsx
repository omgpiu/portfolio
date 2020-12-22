import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './Main/Main';
import Skills from './skills/Skills';
import Works from './works/Works';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import About from "./about/About";
import Services from "./services/Services";
import Education from "./education/Education";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Services/>

            <Skills/>
            <Education/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;
