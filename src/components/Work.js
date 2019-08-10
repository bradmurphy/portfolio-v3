import React from 'react';
import PropTypes from 'prop-types';

// components
import Project from "./Project";

const Work = (props) => (
    <section className="component-work">
        <h2 className="typography__work-headline">{`//`} <strong>Work</strong></h2>
        {props.projects.map((project, key) => (
            <Project
                date={project.date}
                headline={project.headline}
                key={key}
                src={project.logo}
                tech={project.technology}
                type={project.type}
                url={project.url}
                width={project.width}
            >
                { project.copy }
            </Project>
        ))}
    </section>
);

Work.propTypes = {
    projects: PropTypes.array
};

export default Work;


