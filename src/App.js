import React from 'react';
//import 'materialize-css/dist/css/materialize.min.css'
//import 'material-icons/iconfont/material-icons.css'
import './App.scss';

import Nav from './components/Nav/Nav.js';
import About from './views/About.js';
import Events from './views/Events.js';
import Landing from './views/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
