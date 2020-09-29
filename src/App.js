import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Projects from './components/Projects';
import Contact from  './components/Contact'
import About from  './components/About'

function App() {
  return (
    <div>
      <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
