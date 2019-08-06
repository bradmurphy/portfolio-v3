import React, { Component } from 'react';
import { images } from '../data';

class Resume extends Component {
    render() {
        return (
            <section id="resume-wrap">
                <div className="component-resume">
                    <div className="component-resume__profile-block">
                        <a href="/">
                            <img src={images.logo} alt="Brad Murphy" />
                        </a>
                        <span className="typography__copy typography__copy--resume">Brad Murphy</span>
                        <span className="typography__copy typography__copy--resume"><strong>Senior Developer</strong></span>
                        <span className="typography__copy typography__copy--resume">(404) 432 - 3796</span>
                        <a href="/" className="component-link__resume-link typography__copy typography__copy--resume">bradmurphydev.com</a>
                        <a href="mailto:bm.dev84@gmail.com?&amp;subject=BRADMURPHYDEV.COM%20|%20Website%20Inquiry" className="component-link__resume-link typography__copy typography__copy--resume">bm.dev84@gmail.com</a>
                        <span className="typography__copy typography__copy--resume">Woodstock, GA 30188</span>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="component-link__resume-page">
                            <img src={images.resume} alt="Resume" />
                        </a>
                    </div>
                    <div className="component-resume__info-block">
                        <h1 className="typography__resume-headline">Summary</h1>
                        <p className="typography__copy typography__copy--resume">Driven programmer with an immediate goal to obtain a challenging and rewarding position as
                            a Front-End Developer to further optimize my skill set. I specialize in creating great user
                            experiences using the latest technologies available to provide innovative, elegant and
                            cutting-edge content to the marketing and advertising industry.</p>
                        <h1 className="typography__resume-headline">Experience</h1>
                        <div className="component-resume__job-block">
                            <p className="typography__copy typography__copy--resume"><strong>Senior Developer</strong></p>
                            <p className="typography__copy typography__copy--resume"><strong>Black Airplane</strong> (<a href="http://blackairplane.com" target="_blank" rel="noopener noreferrer">blackairplane.com</a>) <em>2018 - Present</em></p>
                            <p className="typography__copy typography__copy--resume"><strong>Clients:</strong> The Weather Channel, Big Nerd Ranch, Coca-Cola, SeatGeek</p>
                            <ul className="component-resume__skills-list">
                                <li className="typography__copy typography__copy--resume">
                                    Build, maintain and deploy interactive websites and applications to creative and
                                    client specifications.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Create and maintain build systems, scaffolds and tools used by engineers and
                                    designers every day for faster in-house production.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Help establish code standard guidelines and best practices.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Help develop learning tools, presentations, documentation and other resources for
                                    onboarding new engineers and general employee education.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Learn new technologies, absorb documentation quickly and deploy clean, efficient,
                                    bug-free code to the expected standard.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    <strong>Skills/Technologies Utilized:</strong> AngularJS, Angular, ReactJS, React Native, Vue,
                                    WordPress, NodeJS, PHP, Laravel, JavaScript, HTML5, CSS3
                                </li>
                            </ul>
                        </div>
                        <div className="component-resume__job-block">
                            <p className="typography__copy typography__copy--resume"><strong>Instructor</strong></p>
                            <p className="typography__copy typography__copy--resume"><strong>Creative Circus</strong> (<a href="http://creativecircus.edu" target="_blank" rel="noopener noreferrer">creativecircus.edu</a>) <em>2018 - Present</em></p>
                            <ul className="component-resume__skills-list">
                                <li className="typography__copy typography__copy--resume">
                                    Teach incoming students an assortment of subjects including: ReactJS, Web
                                    Animations, JavaScript, ES6, Programming Theory, WebGL, etc.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Mentor and help with an assortment of projects outside of class responsibilities.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Contribute as a Creative Circus Alumni and Instructor.
                                </li>
                            </ul>
                        </div>
                        <div className="component-resume__job-block">
                            <p className="typography__copy typography__copy--resume"><strong>Interface Engineer</strong></p>
                            <p className="typography__copy typography__copy--resume"><strong>Hook Studios</strong> (<a href="http://byhook.com" target="_blank" rel="noopener noreferrer">byhook.com</a>) <em>2015 - 2018</em></p>
                            <p className="typography__copy typography__copy--resume"><strong>Clients:</strong> Google, YouTube, Slack, Dropbox</p>
                            <ul className="component-resume__skills-list">
                                <li className="typography__copy typography__copy--resume">
                                    Build, maintain and deploy interactive websites and applications to creative and
                                    client specifications.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Create and maintain build systems, scaffolds and tools used by engineers and
                                    designers every day for faster in-house production.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Help develop learning tools, presentations, documentation and other resources for
                                    onboarding new engineers and general employee education.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    Learn new technologies, absorb documentation quickly and deploy clean, efficient,
                                    bug-free code to the expected standard.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5, CSS3, Angular, Backbone, React,
                                    React Native, Polymer, AEM, AMP, Node, Gulp, Glue, Goro, Kintaro, Closure, Bracket,
                                    GSAP, ES6
                                </li>
                            </ul>
                        </div>
                        <div className="component-resume__job-block">
                            <p className="typography__copy typography__copy--resume"><strong>Front End Developer</strong></p>
                            <p className="typography__copy typography__copy--resume"><strong>Artifact Design</strong> (<a href="http://artifactdesign.com" target="_blank" rel="noopener noreferrer">artifactdesign.com</a>) <em>2014 - 2015</em></p>
                            <ul className="component-resume__skills-list">
                                <li className="typography__copy typography__copy--resume">
                                    Worked with a team of 5 people to both wireframe and develop responsive
                                    websites.
                                </li>
                                <li className="typography__copy typography__copy--resume">
                                    <strong>Skills/Technologies Utilized:</strong> JavaScript, jQuery, GSAP, HTML5, CSS3
                                </li>
                            </ul>
                        </div>
                        <h1 className="typography__resume-headline">Education</h1>
                        <div className="component-resume__job-block">
                            <p className="typography__copy typography__copy--resume"><strong>The Creative Circus</strong> - Interactive Development</p>
                            <p className="typography__copy typography__copy--resume">(<a href="http://creativecircus.edu" target="_blank" rel="noopener noreferrer">creativecircus.edu</a>) | <em>June 2013 - December 2014</em></p>
                            <ul className="component-resume__skills-list">
                                <li className="typography__copy typography__copy--resume">
                                    <strong>Courses Include:</strong> Programming, Web Development, Interactive Design, Strategy, PHP,
                                    jQuery, 4A’s Real-world Environment Class, Digital Teams, User Experience, Graphic Design
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
