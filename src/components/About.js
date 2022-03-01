import React from 'react';
import PropTypes from 'prop-types';

// components
import { BlinkkLink } from "./Links";

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
        <a href={props.data.work.link} target="_blank" rel="noopener noreferrer" className="component-about__blinkk-logo">
            <img src={props.data.work.src} alt={props.data.work.alt} />
        </a>
        <p className="typography__copy typography__copy--light">
            I currently reside in Canton, Georgia and work for <BlinkkLink href={props.data.work.link}>{props.data.work.alt}</BlinkkLink> with an amazing worldwide team.
        </p>
        <p className="typography__copy typography__copy--light">
            Aside from programming, I tend to divide my time between enjoying good food and cocktails with friends or hanging out
            with my miniature schnauzers, Atlas & Siva. 
        </p>
        <p className="typography__copy typography__copy--light">
            When we're not roaming the city, you can usually find us crashed
            out on the couch watching the next binge-worthy show on Netflix. And of course, last but not least -- jamming out to some
            good tunes.
        </p>
        <p className="typography__copy typography__copy--light">
            This is where I keep select digital creations that I find fun (and still exist), unique and/or interesting. Feel free to explore at your leisure.
        </p>
    </section>
);

About.propTypes = {
    data: PropTypes.object
};

export default About;


