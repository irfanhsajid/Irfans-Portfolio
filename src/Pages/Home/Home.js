import React from 'react';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;