import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Home from './Home';
import Resume from './Resume';

export const RouteLink = function({label, to}) {
    return <Link to={to}>{ label }</Link>
};

const HomeScreen = function() {
    return <Home />;
};

const ResumeScreen = function() {
    return <Resume />;
};

function Routes() {
    return (
        <Router>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/resume" component={ResumeScreen} />
        </Router>
    );
}

export default Routes;