import React from 'react';
import {Switch, Route, Link as NavLink} from 'react-router-dom';
import withStyles from 'react-jss';



import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';

export const ABOUT_PATH = "/";
export const PROJECTS_PATH = "/Projects";
export const CONTACT_PATH = "/Contact";
export const RESUME_PATH = "/Resume";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    const {theme} = this.props;
    document.body.style.backgroundColor = theme.page.backgroundColor;
  }

  render (){
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <h1 className={classes.name}>Daniel Kozlovsky</h1>
        <div className={classes.navBar}>
          <NavLink to={ABOUT_PATH}>About Me</NavLink>
          <NavLink to={PROJECTS_PATH}>Projects</NavLink>
          <NavLink to={RESUME_PATH}>Resume</NavLink>
          <NavLink to={CONTACT_PATH}>Contact</NavLink>
        </div>
        <div className={classes.page}>
          <Switch>
            <Route path={PROJECTS_PATH} component={Projects}/>
            <Route path={RESUME_PATH} component={Resume}/>
            <Route path={CONTACT_PATH} component={Contact}/>
            <Route path={ABOUT_PATH} component={About}/>
          </Switch>
        </div>
        {/* footer goes here*/}
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    height: '100%'
  },
  name: {
    textAlign: 'center',
    marginTop: '2%'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    maxWidth: '50vw',
    margin: 'auto',

    '& a': {
      font: theme.navBarText.font,
      color: theme.navBarText.color,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      margin: '0.2em 0.5em',
      '&:visited': {
        color: theme.navBarText.color,
      },

    }
  },
  page: {
    padding: '5% 10%',
  },
});

export default withStyles(styles, {injectTheme: true})(App);
