import React from 'react';
import { images } from '../data';

const Resume = () => (
  <section id="resume-wrap">
    <div className="component-resume">
      <div className="component-resume__profile-block">
        <a href="/" className="component-resume__back-link">
          <img src={images.back} alt="Back" />
        </a>
        <a href="/" className="component-resume__profile-block-logo">
          <img src={images.logo} alt="Brad Murphy" />
        </a>
        <span className="typography__copy typography__copy--resume">
          Brad Murphy
        </span>
        <span className="typography__copy typography__copy--resume">
          <strong>UX Engineer</strong>
        </span>
        <span className="typography__copy typography__copy--resume">
          (404) 432 - 3796
        </span>
        <a
          href="/"
          className="component-link component-link__resume-link typography__copy typography__copy--resume"
        >
          bradmurphydev.com
        </a>
        <a
          href="mailto:bm.dev84@gmail.com?&amp;subject=BRADMURPHYDEV.COM%20|%20Website%20Inquiry"
          className="component-link component-link__resume-link typography__copy typography__copy--resume"
        >
          bm.dev84@gmail.com
        </a>
        <span className="typography__copy typography__copy--resume">
          Canton, GA 30114
        </span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="component-link__resume-page"
        >
          <img src={images.download} alt="Download Resume" />
        </a>
      </div>
      <div className="component-resume__info-block">
        <h1 className="typography__resume-headline">Summary</h1>
        <p className="typography__copy typography__copy--resume">
          Driven programmer with an immediate goal to obtain a challenging and
          rewarding position as a Senior Front-End Developer to further optimize
          my skill set. I specialize in creating great user experiences using
          the latest technologies available to provide innovative, elegant and
          cutting-edge content to the marketing and advertising industry.
        </p>
        <h1 className="typography__resume-headline">Experience</h1>
        <div className="component-resume__job-block">
          <p className="typography__copy typography__copy--resume">
            <strong>UX Engineer</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Blinkk (
            <a
              href="https://blinkk.com"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              blinkk.com
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2021 - Present</em>
          </p>
          <p className="typography__copy typography__copy--resume">
            <strong>Clients:</strong> Google, Teachable
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Develop and maintain automation solutions for open source build systems and plugins.
            </li>
            <li className="typography__copy typography__copy--resume">
              Integrate current internal tool sets and build systems with NextJS/ReactJS.
            </li>
            <li className="typography__copy typography__copy--resume">
              Refactor and configure current CMS hierarchy to be more maintainable for the client; configuring related logic for the front end.
            </li>
            <li className="typography__copy typography__copy--resume">
              Build, maintain and deploy interactive websites and applications to creative and client specifications.
            </li>
            <li className="typography__copy typography__copy--resume">
              Develop learning presentations for team-wide education.
            </li>
            <li className="typography__copy typography__copy--resume">
              Assist with code reviews, mentoring and onboarding new engineers to new and existing projects.
            </li>
            <li className="typography__copy typography__copy--resume">
              Executing the standard of maintainability, interactivity, accessibility, localization and performance throughout every project.
            </li>
            <li className="typography__copy typography__copy--resume">
              <strong>Skills/Technologies Utilized:</strong> JavaScript, Typescript, HTML5, CSS3, NodeJS, NextJS, ReactJS, WordPress, Kintaro, YAML, SASS, GCP
            </li>
          </ul>
        </div>
        <div className="component-resume__job-block">
          <p className="typography__copy typography__copy--resume">
            <strong>Senior Developer</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Dynamic Marketing Systems (
            <a
              href="http://discoverdms.com"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              discoverdms.com
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2021 - 2021</em>
          </p>
          <p className="typography__copy typography__copy--resume">
            <strong>Clients:</strong> American Airlines, CITI, AT&amp;T,
            Barclays
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Develop and maintain automation solutions for internal asset
              management and storage after identifying time wasted on current
              manual process using AWS Amplify.
            </li>
            <li className="typography__copy typography__copy--resume">
              Provide designers and account managers with development expertise
              and assist with UX Design.
            </li>
            <li className="typography__copy typography__copy--resume">
              Led internal documentation initiative to create and manage
              development best practices for code style, frameworks, build tools
              and any other development practices.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed HTML Email Automation script to quickly swap out dynamic
              content for multiple emails, utilizing MJML for pixel perfect
              emails across all major email clients.
            </li>
            <li className="typography__copy typography__copy--resume">
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, PHP, NodeJS, Webpack, ReactJS, React Native, WordPress,
              MJML, AWS Amplify
            </li>
          </ul>
        </div>
        <div className="component-resume__job-block">
          <p className="typography__copy typography__copy--resume">
            <strong>Senior Developer</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Black Airplane (
            <a
              href="http://blackairplane.com"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              blackairplane.com
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2018 - 2021</em>
          </p>
          <p className="typography__copy typography__copy--resume">
            <strong>Clients:</strong> Kefi, The Weather Channel, Big Nerd Ranch,
            Coca-Cola, SeatGeek
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Build, maintain and deploy interactive websites and applications
              to creative and client specifications.
            </li>
            <li className="typography__copy typography__copy--resume">
              Build and maintain POS Application in React Native for all
              shopping and guest/party admission at Kefi.
            </li>
            <li className="typography__copy typography__copy--resume">
              Build and maintain Kiosk Sign In/Sign Up Application in React
              Native to handle guest registration and check-ins.
            </li>
            <li className="typography__copy typography__copy--resume">
              Establish code standard guidelines, best practices and project
              workflows.
            </li>
            <li className="typography__copy typography__copy--resume">
              Utilizing WordPress’ Headless REST API and Vue for the front end,
              created a modern and flexible Pet Adoption Portal with automatic
              adoption form generation.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed a community fundraising platform for the jewish
              community. Bringing a digital solution forth to help synagogue’s
              hold traditional holiday fundraising events and prayers during the
              COVID-19 Pandemic.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed a community outreach fundraising platform to show
              gratitude during the COVID-19 Pandemic utilizing the Google Maps
              and Places API’s to track messages, location, likes and names.
            </li>
            <li className="typography__copy typography__copy--resume">
              Mentor junior engineers and actively create educational material
              for team members to showcase new technology and standards.
            </li>
            <li className="typography__copy typography__copy--resume">
              Consistently adapt to emerging technologies both on the back and
              front-end to accommodate a wide variety of clients.
            </li>
            <li className="typography__copy typography__copy--resume">
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, PHP, NodeJS, Webpack, AngularJS, Angular, ReactJS, React
              Native, VueJS, WordPress, Laravel
            </li>
          </ul>
        </div>
        <div className="component-resume__job-block">
          <p className="typography__copy typography__copy--resume">
            <strong>Instructor</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Creative Circus (
            <a
              href="http://creativecircus.edu"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              creativecircus.edu
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2018 - Present</em>
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Instructor for incoming students, teaching an assortment of
              subjects including: ReactJS, Web Animations, JavaScript, ES6,
              Programming Theory, WebGL, etc.
            </li>
            <li className="typography__copy typography__copy--resume">
              Mentor and help with an assortment of projects outside of
              students' class responsibilities.
            </li>
            <li className="typography__copy typography__copy--resume">
              Develop and maintain curriculum(s) based on the latest
              technologies and best practices.
            </li>
            <li className="typography__copy typography__copy--resume">
              Necessity to have difficult conversations to help students
              performance.
            </li>
            <li className="typography__copy typography__copy--resume">
              Contribute as a Creative Circus Alumni and Instructor.
            </li>
          </ul>
        </div>
        <div className="component-resume__job-block">
          <p className="typography__copy typography__copy--resume">
            <strong>Interface Engineer</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Hook Studios (
            <a
              href="http://byhook.com"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              byhook.com
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2015 - 2018</em>
          </p>
          <p className="typography__copy typography__copy--resume">
            <strong>Clients:</strong> Google, YouTube, Slack, Dropbox
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Developed the official YouTube Rewind Digital Experience (2015 -
              2017) showcasing all of the top YouTube Content Creators. Each
              iteration set a high benchmark which required a step up in digital
              solutions each time. From WebGL 3D Animation to PixiJS and Canvas
              Digital Art Creation, the experience grew more entertaining and
              interactive.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed an internal sprite sheet generator for animators to
              quickly batch animation frames together for their projects.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed a banner generation system using NodeJS. Saving
              thousands of man hours from manually creating individual banner
              builds.
            </li>
            <li className="typography__copy typography__copy--resume">
              Developed YouTube Email Automation script to read from Google
              Sheets spreadsheet and quickly build out and send each countries
              top 100 tracks for the week to subscribers.
            </li>
            <li className="typography__copy typography__copy--resume">
              Build, maintain and deploy interactive websites and applications
              to creative and client specifications.
            </li>
            <li className="typography__copy typography__copy--resume">
              Create and maintain build systems, scaffolds and tools used by
              engineers and designers every day for faster in-house production.
            </li>
            <li className="typography__copy typography__copy--resume">
              Help develop learning tools, presentations, documentation and
              other resources for onboarding new engineers and general employee
              education.
            </li>
            <li className="typography__copy typography__copy--resume">
              Learn new technologies, absorb documentation quickly and deploy
              clean, efficient, bug-free code to the expected standard.
            </li>
            <li className="typography__copy typography__copy--resume">
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, Angular, Backbone, React, React Native, Polymer, AEM, AMP, GCP,
              Node, Gulp, Glue, Goro, Kintaro, Closure, Bracket, GSAP, ES6
            </li>
          </ul>
        </div>
        <div className="component-resume__job-block component-resume__job-block--no-margin">
          <p className="typography__copy typography__copy--resume">
            <strong>Front End Developer</strong>
          </p>
          <p className="typography__copy typography__copy--resume">
            Artifact Design (
            <a
              href="http://artifactdesign.com"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              artifactdesign.com
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2014 - 2015</em>
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              Worked with a team of 5 people to both wireframe and develop
              responsive websites.
            </li>
            <li className="typography__copy typography__copy--resume">
              <strong>Skills/Technologies Utilized:</strong> JavaScript, jQuery,
              GSAP, HTML5, CSS3
            </li>
          </ul>
        </div>
        <h1 className="typography__resume-headline">Education</h1>
        <div className="component-resume__job-block component-resume__job-block--no-margin">
          <p className="typography__copy typography__copy--resume">
            <strong>The Creative Circus</strong> (
            <a
              href="http://creativecircus.edu"
              className="component-link component-link__resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              creativecircus.edu
            </a>
            )
          </p>
          <p className="typography__copy typography__copy--resume">
            Interactive Development
          </p>
          <p className="typography__copy typography__copy--resume">
            <em>2013 - 2015</em>
          </p>
          <ul className="component-resume__skills-list">
            <li className="typography__copy typography__copy--resume">
              <strong>Courses Include:</strong> Programming, Web Development,
              Interactive Design, Strategy, PHP, jQuery, 4A’s Real-world
              Environment Class, Digital Teams, User Experience, Graphic Design
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
