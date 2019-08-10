import React from 'react';
import PropTypes from 'prop-types';

// components
import { Link } from "./Links";

const Project = (props) => {
    const { children, date, headline, src, tech, type, url, width } = props;

    return (
        <section className="component-project">
            <a href={url} target="_blank" className="component-project__logo" style={{ width: `${width}px` }} rel="noopener noreferrer">
                <img src={src} alt={headline} />
            </a>
            <p className="typography__copy typography__copy--project"><strong>Project:</strong> <Link href={url} target="_blank">{ headline }</Link> (<em>{ type }</em>)</p>
            <p className="typography__copy typography__copy--project"><strong>Date:</strong> { date }</p>
            <p className="typography__copy typography__copy--project"><strong>Notes:</strong> { children }</p>
            <p className="typography__copy typography__copy--project typography__copy--tech">{ tech.join(', ') }</p>
        </section>
    );
};

Project.propTypes = {
    children: PropTypes.node,
    date: PropTypes.string,
    headline: PropTypes.string,
    src: PropTypes.string,
    tech: PropTypes.array,
    type: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number
};

export default Project;


