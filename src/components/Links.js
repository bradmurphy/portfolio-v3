import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseLink extends Component {
    render() {
        const { href, children, mode, onClick, target } = this.props;
        let linkContent = null;

        switch(mode) {
            case 'submit':
                linkContent = (
                    <span onClick={onClick} className="component-link">
                        {children}
                    </span>
                );
                break;
            default:
                linkContent = (
                    <a href={href} target={target} className="component-link">
                        {children}
                    </a>
                );
        }

        return linkContent;
    }
}

BaseLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    target: PropTypes.string
};

export const Link = (props) => {
    return <BaseLink {...props} />
};

export const SubmitLink = (props) => {
    return <BaseLink {...props} mode="submit" />
};


