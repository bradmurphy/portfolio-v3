import React, { Component } from 'react';
import { data } from '../data';
import Project from "./Project";

class Work extends Component {
    render() {
        return (
            <section className="component-work">
                <h2 className="typography__work-headline">{`//`} <strong>Work</strong></h2>
                {data.map((project, key) => (
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
    }
};

export default Work;


