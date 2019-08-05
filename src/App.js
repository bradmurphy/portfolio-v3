import React, { Component } from 'react';

// Components
import About from './components/About';
import Contact from './components/Contact';
// import { Link } from './components/Links';
import Work from './components/Work';

class App extends Component {
    render() {
        return (
            <div className="component-app">
                <div id="wrap">
                    <About />
                    <Work />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;
