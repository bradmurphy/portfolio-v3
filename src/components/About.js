import React, { Component } from 'react';
import { data } from '../data';
import { BlackAirplaneLink } from "./Links";

class About extends Component {
    render() {
        const about = data.about;

        return (
            <section className="component-about">
                <div className="component-about__header-bar">
                    <img src={about.logo.src} alt={about.logo.alt} />
                    <h1 className="typography__title-headline">{about.name}<br/> <em>{about.title}</em></h1>
                </div>
                <img src={about.avatar} className="component-about__media-avatar" alt="Brad Murphy" />
                <p className="typography__copy typography__copy--light">
                    I always find writing about myself to be a rather difficult task. However -- this is my portfolio, so I suppose
                    I should say a few things.
                </p>
                <a href="https://blackairplane.com/" target="_blank" rel="noopener noreferrer" className="component-about__ba-logo">
                    <img src={about.ba} alt="Brad Murphy" />
                </a>
                <p className="typography__copy typography__copy--light">
                    I currently reside in Woodstock, Georgia and work for <BlackAirplaneLink href="http://www.blackairplane.com" target="_blank">Black Airplane</BlackAirplaneLink> with an amazing group of extremely talented people.
                </p>
                <p className="typography__copy typography__copy--light">
                    Aside from programming, I tend to spend my time either playing a never ending list of video game titles or hanging out
                    with my dogs, Atlas & Siva. When we're not walking the city, you can usually find us grabbing some good eats or crashed out on the couch watching the next thing to binge on Netflix. And of course, last but not least -- jamming out to some good tunes!
                </p>
                <p className="typography__copy typography__copy--light">
                    This is where I keep select digital creations that I find fun, unique and/or interesting. Feel free to explore at your leisure.
                </p>
            </section>
        );
    }
};

export default About;


