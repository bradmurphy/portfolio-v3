import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import About from './About';
import Contact from './Contact';
import Work from './Work';

class Home extends Component {
    render() {
        const { link } = this.props;

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
