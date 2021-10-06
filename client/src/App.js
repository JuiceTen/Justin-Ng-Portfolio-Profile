import About from './Components/About/index'
import Project from './Components/Project/index'
import Contact from './Components/Contact/index'
import Resume from './Components/Resume/index'
import Home from './Components/Home/index'
import React from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Switch key={location.pathname} location={location}>
      <Route exact path='/'>
        <Home />
      </Route>
    
      <Route exact path='/about'>
        <About />
      </Route>
  
      <Route exact path='/project'>
        <Project />
      </Route>
   
      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Route exact path='/resume'>
        <Resume />
      </Route>
    </Switch>
    </AnimatePresence>

  );
}

export default App;
