import React, { Component } from 'react';
import { data } from '../data';
import Project from "./Project";

class Work extends Component {
    render() {
        return (
            <section className="component-work">
                <div className="component-work__wrap">
                    <h2 className="typography__work-headline">{`//`} <em>Work</em></h2>
                    {
                        data.map((project, key) => (
                            <Project
                                date={project.date}
                                headline={project.headline}
                                key={key}
                                src={project.logo}
                                srcAlt={project.headline}
                                tech={project.technology}
                                type={project.type}
                                url={project.url}
                                width={project.width}
                            >{ project.copy }</Project>
                        ))
                    }
                </div>
            </section>
        );
    }
};

export default Work;


