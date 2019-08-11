import React from 'react';
import PropTypes from 'prop-types';

// components
import { BlackAirplaneLink } from "./Links";

const About = (props) => (
    <section className="component-about">
        <div className="component-about__header-bar">
            <img src={props.data.logo.src} alt={props.data.logo.alt} />
            <h1 className="typography__title-headline">{props.data.name}<br/> <strong>{props.data.title}</strong></h1>
        </div>
        <img src={props.data.avatar} className="component-about__media-avatar" alt={props.data.name} />
        <p className="typography__copy typography__copy--light">
            I always find writing about myself to be a rather difficult task. However -- this is my portfolio, so I suppose
            I should say a few things.
        </p>
        <a href={props.data.ba.link} target="_blank" rel="noopener noreferrer" className="component-about__ba-logo">
            <img src={props.data.ba.src} alt={props.data.ba.alt} />
        </a>
        <p className="typography__copy typography__copy--light">
            I currently reside in Woodstock, Georgia and work for <BlackAirplaneLink href={props.data.ba.link}>Black Airplane</BlackAirplaneLink> with an amazing group of extremely talented people.
        </p>
        <p className="typography__copy typography__copy--light">
            Aside from programming, I tend to spend my time either playing a never ending list of video game titles or hanging out
            with my dogs, Atlas & Siva. When we're not walking the city, you can usually find us grabbing some good eats or crashed
            out on the couch watching the next thing to binge on Netflix. And of course, last but not least -- jamming out to some
            good tunes!
        </p>
        <p className="typography__copy typography__copy--light">
            This is where I keep select digital creations that I find fun, unique and/or interesting. Feel free to explore at your leisure.
        </p>
    </section>
);

About.propTypes = {
    data: PropTypes.object
};

export default About;


