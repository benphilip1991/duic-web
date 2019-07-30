import React from 'react';
import './App.scss';

import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import About from './views/About/About.js';
import Events from './views/Events/Events.js';
import Landing from './views/Landing/Landing.js';
import Media from './views/Media/Media.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/login" component={Landing} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
