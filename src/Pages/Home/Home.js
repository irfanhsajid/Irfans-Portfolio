import React from 'react';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <div id="home">
            <NavBar />
            <Banner />
            <MySkills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;