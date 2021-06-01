import React from 'react';
import {Switch, Route, NavLink, withRouter, Redirect} from 'react-router-dom';
import withStyles from 'react-jss';
import {TransitionGroup} from 'react-transition-group';
import {CSSTransition} from 'react-transition-group';


import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import Footer from './Footer';

export const ABOUT_PATH = "/About";
export const PROJECTS_PATH = "/Projects";
export const CONTACT_PATH = "/Contact";
export const RESUME_PATH = "/Resume";

const pathMap = {
  [ABOUT_PATH] : 1,
  [PROJECTS_PATH]: 2,
  [RESUME_PATH]: 3,
  [CONTACT_PATH]: 4,
};
const SLIDE_DUR = 500;
const transistionDistance = "150%";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    const {theme} = this.props;
    this.footer = React.createRef();
    
    this.state = {
      leftSlide: true,
      
    };
    document.body.style.backgroundColor = theme.page.backgroundColor;

    this.updateSlideDirection = this.updateSlideDirection.bind(this);
    this.scrollToID = this.scrollToID.bind(this);
  }

  componentDidUpdate() {
    const {hash} = this.props.location;

    if(hash) {
      let id = hash.split("#")[1];
      this.scrollToID(id);
    }
  }

  scrollToID(elementID) {
    let element = document.getElementById(elementID);
    if(element) {
      element.scrollIntoView({block: 'center'});
    }
  }

  updateSlideDirection(e)
  {

    const {location} = this.props;
    if(pathMap[e.target.pathname] > pathMap[location.pathname])
    {
      this.setState({
        leftSlide: false,
      });
    }
    else if(pathMap[e.target.pathname] === pathMap[location.pathname])
    {
      e.preventDefault();
    }
    else
    {
      this.setState({
        leftSlide: true,
      });
    }
  }

  enter(node, isAppear) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      this.footer.current.style.transition = `opacity ${SLIDE_DUR / 3}ms linear`;
      this.footer.current.style.opacity = 0;
      node.style.cssText += `
      max-width:100%;
      position:absolute;`

      node.style.transform = `translate(${this.state.leftSlide ? "-" + transistionDistance : transistionDistance},0)`;

      let container = node.parentElement;
      if(container) {
        container.style.height = `${node.getBoundingClientRect().height}px`;
      }
      
    }
  }
  entering(node, isAppear) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true))
    {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transform:translate(0,0);
      transition:transform ${SLIDE_DUR}ms ease-out;`
      let container = node.parentElement;
      if(container) {
        container.style.height = `${node.getBoundingClientRect().height}px`;
      }
    }
  }
  entered(node, isAppear) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true))
    {
      this.footer.current.style.transition = `opacity ${SLIDE_DUR / 3 * 2}ms ease-out`;
      this.footer.current.style.opacity = 1;
      node.style.cssText += `
      max-width:100%;
      position:relative;
      transform:translate(0,0);
      transition:transform ${SLIDE_DUR}ms ease-out;`
      //^needs to be here for IE
      let container = node.parentElement;
      if(container) {
        container.style.height = "auto";
      }
    }
    
  }
  exit(node) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transform:translate(0,0);`
    }
    
  }
  exiting(node) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transition:transform ${SLIDE_DUR}ms ease-out`
      node.style.transform = `translate(${this.state.leftSlide ? transistionDistance : "-" + transistionDistance},0)`;
    }
  }
  exited(node) {
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {

      node.style.cssText += `
      max-width:100%;
      position:absolute;`
  
      node.style.transform = `translate(${this.state.leftSlide ? transistionDistance : "-" + transistionDistance},0)`;
    }
  }

  render (){
    const {classes} = this.props;
    const {location} = this.props;
 
    return (
      <div className={classes.root}>
        <h1 className={classes.name}>Daniel Kozlovsky</h1>
        <nav className={classes.navBar}>
          <NavLink className={classes.navLink} exact onClick={e => this.updateSlideDirection(e)} to={ABOUT_PATH} activeClassName={classes.activeNavbar}>About Me</NavLink>
          <NavLink className={classes.navLink} onClick={e => this.updateSlideDirection(e)} to={PROJECTS_PATH} activeClassName={classes.activeNavbar}>Projects</NavLink>
          <NavLink className={classes.navLink} onClick={e => this.updateSlideDirection(e)} to={RESUME_PATH} activeClassName={classes.activeNavbar}>Resume</NavLink>
          <NavLink className={classes.navLink} onClick={e => this.updateSlideDirection(e)} to={CONTACT_PATH} activeClassName={classes.activeNavbar}>Contact</NavLink>
        </nav>
        <div className={classes.page}>
          <TransitionGroup component={null}>
            <CSSTransition 
              key={location.key}
              timeout={SLIDE_DUR}
              mountOnEnter={true}
              unmountOnExit={true}
              onEnter={(node, isAppear) => this.enter(node, isAppear)}
              onEntering={(node, isAppear) => this.entering(node, isAppear)}
              onEntered={(node, isAppear) => this.entered(node, isAppear)}
              onExit={(node) => this.exit(node)}
              onExiting={(node) => this.exiting(node)}
              onExited={(node) => this.exited(node)}>
              <Switch location={location}>
                <Route path={PROJECTS_PATH +"/*"}>
                  <Redirect to={{
                      pathname: PROJECTS_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={PROJECTS_PATH}>
                  <Projects determineSlide={this.updateSlideDirection}/>
                </Route>

                <Route path={RESUME_PATH +"/*"}>
                  <Redirect to={{
                      pathname: RESUME_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={RESUME_PATH}>
                  <Resume determineSlide={this.updateSlideDirection}/>
                </Route>

                <Route path={CONTACT_PATH +"/*"}>
                  <Redirect to={{
                      pathname: CONTACT_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={CONTACT_PATH}>
                  <Contact determineSlide={this.updateSlideDirection}/>
                </Route>

                <Route path={ABOUT_PATH +"/*"}>
                  <Redirect to={{
                      pathname: ABOUT_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={ABOUT_PATH}>
                  <About determineSlide={this.updateSlideDirection}/>
                </Route>

                <Route>
                  <Redirect to={{
                    pathname: ABOUT_PATH,
                    state: {isRedirect: true}}}/>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          
        </div>
        <div ref={this.footer} className={classes.footer}>
          <Footer />
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
  },
  navLink: {
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
    '&:hover': {
      backgroundColor: theme.palette.select,
    }
  },
  activeNavbar: {
    backgroundColor: theme.palette.highlight,
    '&:hover': {
      backgroundColor: theme.palette.highlight,
    },
  },
  page: {
    // minWidth: '70%',
    margin: '5% 15%',
    position: 'relative',
    // overflow: 'hidden',
  },
  footer: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '2em',
    paddingBottom: '1em',
    
    //transition: `opacity ${SLIDE_DUR / 2}ms ease-out`,
  },
  //for IE 10+
  '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)' : {
        page: {
          minHeight: '100%',
        },
  },
});

export default withRouter(withStyles(styles, {injectTheme: true})(App));
