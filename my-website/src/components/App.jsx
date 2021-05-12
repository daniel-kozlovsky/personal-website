import React from 'react';
import {Switch, Route, Link as NavLink} from 'react-router-dom';

import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';

const ABOUT_PATH = "/";
const PROJECTS_PATH = "/Projects";
const CONTACT_PATH = "/Contact";
const RESUME_PATH = "/Resume";

class App extends React.Component {

  render (){
    return (
      <div>
        <NavLink to={ABOUT_PATH}>About Me</NavLink>
        <NavLink to={PROJECTS_PATH}>Projects</NavLink>
        <NavLink to={RESUME_PATH}>Resume</NavLink>
        <NavLink to={CONTACT_PATH}>Contact</NavLink>
        
        <Switch>
          <Route path={PROJECTS_PATH} component={Projects}/>
          <Route path={RESUME_PATH} component={Resume}/>
          <Route path={CONTACT_PATH} component={Contact}/>
          <Route path={ABOUT_PATH} component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
