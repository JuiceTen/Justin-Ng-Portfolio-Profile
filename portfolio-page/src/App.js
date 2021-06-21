import Nav from './Components/Nav/index'
import About from './Components/About/index'
import Project from './Components/Project/index'
import Contact from './Components/Contact/index'
import Resume from './Components/Resume/index'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Nav />

    <Switch>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
    
    <Switch>
      <Route path='/project'>
        <Project />
      </Route>
    </Switch>
    
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>

    <Switch>
      <Route path='/resume'>
        <Resume />
      </Route>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
