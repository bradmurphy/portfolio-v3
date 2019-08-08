import React, { Component } from 'react';

// Components
import About from './About';
import Contact from './Contact';
import Work from './Work';

class Home extends Component {
    render() {
        return (
            <section id="wrap">
                <About />
                <Work />
                <Contact />
            </section>
        );
    }
};

export default Home;
