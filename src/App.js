import Nav from './Components/Nav/index'
import About from './Components/About/index'
import Project from './Components/Project/index'
import Contact from './Components/Contact/index'
import Resume from './Components/Resume/index'
import Home from './Components/Home/index'
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
    <div id = 'background'>
    <Nav />
    <main>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>
    <Switch>
      <Route exact path='/about'>
        <About />
      </Route>
    </Switch>
    
    <Switch>
      <Route exact path='/project'>
        <Project />
      </Route>
    </Switch>
    
    <Switch>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Switch>

    <Switch>
      <Route exact path='/resume'>
        <Resume />
      </Route>
    </Switch>
    </main>
   
    </div>
    </Router>
  );
}

export default App;
