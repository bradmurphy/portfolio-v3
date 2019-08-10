import React from 'react';
import { data } from '../data';

// Components
import About from './About';
import Contact from './Contact';
import Work from './Work';

const Home = () => (
    <section id="wrap">
        <About data={data.about} />
        <Work projects={data.projects} />
        <Contact data={data.contact} />
    </section>
);

export default Home;
