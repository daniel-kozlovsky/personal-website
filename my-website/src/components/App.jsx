import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import withStyles from 'react-jss';



import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import Footer from './Footer';

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
        <nav className={classes.navBar}>
          <NavLink exact to={ABOUT_PATH} activeClassName={classes.activeNavbar}>About Me</NavLink>
          <NavLink to={PROJECTS_PATH} activeClassName={classes.activeNavbar}>Projects</NavLink>
          <NavLink to={RESUME_PATH} activeClassName={classes.activeNavbar}>Resume</NavLink>
          <NavLink to={CONTACT_PATH} activeClassName={classes.activeNavbar}>Contact</NavLink>
        </nav>
        <div className={classes.page}>
          <Switch>
            <Route path={PROJECTS_PATH} component={Projects}/>
            <Route path={RESUME_PATH} component={Resume}/>
            <Route path={CONTACT_PATH} component={Contact}/>
            <Route path={ABOUT_PATH} component={About}/>
          </Switch>
        </div>
        <div className={classes.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    minHeight: 'calc(100vh - 1em)',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    textAlign: 'center',
    marginTop: '1%',
    font: theme.name.font,
    color: theme.name.color,
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',

    '& a': {
      ...theme.buttonStyle,
      font: theme.navBarText.font,
      color: theme.navBarText.color,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      backgroundColor: 'none',
      margin: '0 0.3em',
      '&:visited': {
        color: theme.navBarText.color,
      },
    },
  },
  activeNavbar: {
    backgroundColor: theme.palette.highlight,
  },
  page: {
    padding: '5% 15%',
  },
  footer: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '2em',
    paddingBottom: '1em',

  },
});

export default withStyles(styles, {injectTheme: true})(App);
