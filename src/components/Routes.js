import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// components
import Home from './Home';
import Resume from './Resume';

const HomeScreen = () => ( <Home /> );

const ResumeScreen = () => ( <Resume /> );

const Routes = () => (
    <Router>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/resume" component={ResumeScreen} />
    </Router>
);

export default Routes;