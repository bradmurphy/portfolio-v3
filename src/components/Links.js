import React from 'react';
import PropTypes from 'prop-types';

const BaseLink = (props) => {
    const { href, children, disabled, hidden, mode, onClick, target } = props;

    const disabledStyle = disabled ? {
        cursor: 'none',
        pointerEvents: 'none',
        opacity: '0.75'
    } : {};

    let linkContent = null;

    switch(mode) {
        case 'blinkk':
            linkContent = (
                <a href={href} target="_blank" rel="noopener noreferrer" className="component-link component-link--blinkk">
                    {children}
                </a>
            );
            break;
        case 'submit':
            linkContent = (
                <span onClick={onClick} className="component-link component-link--submit" style={disabledStyle} hidden={hidden}>
                    {children}
                </span>
            );
            break;
        case 'resume':
            linkContent = (
                <a href={href} className="component-link component-link--resume-link">
                    {children}
                </a>
            );
            break;
        default:
            linkContent = (
                <a href={href} target={target} rel="noopener noreferrer" className="component-link">
                    {children}
                </a>
            );
    }

    return linkContent;
};

BaseLink.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    target: PropTypes.string
};

export const BlinkkLink = (props) => ( <BaseLink {...props} mode="blinkk" /> );
export const Link = (props) => ( <BaseLink {...props} /> );
export const ResumeLink = (props) => ( <BaseLink {...props} mode="resume" /> );
export const SubmitLink = (props) => ( <BaseLink {...props} mode="submit" /> );


