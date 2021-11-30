import React from 'react';

import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Projects />
        </>
    );
};

export default Home;