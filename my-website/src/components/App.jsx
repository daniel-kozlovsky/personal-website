import React from 'react';
import {Switch, Route, NavLink, withRouter, Redirect} from 'react-router-dom';
import withStyles from 'react-jss';
import {TransitionGroup} from 'react-transition-group';
import {CSSTransition} from 'react-transition-group';

import {ABOUT_PATH, PROJECTS_PATH, RESUME_PATH, CONTACT_PATH} from '../utility.js';

import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import Footer from './Footer';

//Give the pages an order for precedence and slide direction
const pathMap = {
  [ABOUT_PATH] : 1,
  [PROJECTS_PATH]: 2,
  [RESUME_PATH]: 3,
  [CONTACT_PATH]: 4,
};
//transition duration for sliding pages
const SLIDE_DUR = 500;
//where to offset the pages when they slide
const transistionDistance = "150%";

/**
 * Main render point, highest container that gets injected into the root div. Contains
 * The header, navigation, footer and main content
 */
class App extends React.Component {
  
  constructor(props) {
    super(props);
    const {theme} = this.props;
    this.footer = React.createRef();
    
    this.state = {
      leftSlide: true,
      transitionKey: this.props.location.key,
      currentLocation: this.props.location,
    };
    document.body.style.backgroundColor = theme.page.backgroundColor;

    this.scrollToID = this.scrollToID.bind(this);
  }

  componentDidUpdate(prevProps) {
    //slide direction on page change
    const newKey = this.props.location.key;
    const {pathname} = this.props.location;
    const oldPath = prevProps.location.pathname;
    
    //path change
    if(pathname !== oldPath) {
      
      //determine slide direction
      if(pathMap[pathname] > pathMap[oldPath])
      {
        this.setState({
          leftSlide: false,
          transitionKey: newKey,
          currentLocation: this.props.location,
        });
      }
      else
      {
        this.setState({
          leftSlide: true,
          transitionKey: newKey,
          currentLocation: this.props.location,
        });
      }
    }

  }
  
  /**
   * Scroll the page to an element and centers it as long as the top doesn't overflow
   * @param {string} hash - The hash id of the element to scroll to
   */
  scrollToID(hash) {
    let id = hash.split("#")[1];
    let element = document.getElementById(id);
    if(element) {
      //element too big to center
      let scrollPosY = window.scrollY? window.scrollY : window.pageYOffset;
      if(element.getBoundingClientRect().height > window.innerHeight) {
        //put element to top of screen
        window.scrollTo(0, element.getBoundingClientRect().top + scrollPosY)
      }
      else {
        //center element
        window.scrollTo(0, element.getBoundingClientRect().top + scrollPosY - (window.innerHeight/2 - element.getBoundingClientRect().height / 2));
      }
    }
  }

  /**
   * The handler for the first stage of the slide animation. Handles the entering of the next page
   * @param {Object} node - The page element (div) that is entering
   */
  enter(node, isAppear) {
    
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      this.footer.current.style.transition = `opacity ${SLIDE_DUR / 3}ms linear`;
      this.footer.current.style.opacity = 0;
      node.style.cssText += `
      max-width:100%;
      position:absolute;`

      node.style.transform = `translate(${this.state.leftSlide ? "-" + transistionDistance : transistionDistance},0)`;

      //set parent container to page's size to keep footer and scroll consistent
      let container = node.parentElement;
      if(container) {
        container.style.height = `${node.getBoundingClientRect().height}px`;
      }
    }
  }
  /**
   * The handler for the second stage of the slide animation. Handles the active phase of the next page
   * @param {Object} node - The page element (div) that is entering
   */
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
    //scroll to anchor if there's a hash
    if(this.state.currentLocation.hash)
    {
      this.scrollToID(this.state.currentLocation.hash);
    }
  }
  /**
   * The handler for the last stage of the slide animation. Persists the style.
   * @param {Object} node - The page element (div) that is entering
   */
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
  /**
   * The handler for the first stage of the slide animation. Handles the exit of the old page
   * @param {Object} node - The page element (div) that is leaving
   */
  exit(node) {
    
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transform:translate(0,0);`
    }
    
  }
  /**
   * The handler for the first stage of the slide animation. Handles the active phase of the old page
   * @param {Object} node - The page element (div) that is leaving
   */
  exiting(node) {

    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transition:transform ${SLIDE_DUR}ms ease-out`
      node.style.transform = `translate(${this.state.leftSlide ? transistionDistance : "-" + transistionDistance},0)`;
    }
  }
  /**
   * The handler for the first stage of the slide animation. Persists the old page style until unmount
   * @param {Object} node - The page element (div) that is leaving
   */
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
    const {transitionKey} = this.state;
    return (
      <div className={classes.root}>
        <h1 className={classes.name}>Daniel Kozlovsky</h1>
        <nav className={classes.navBar}>
          <NavLink className={classes.navLink} exact  to={ABOUT_PATH} activeClassName={classes.activeNavbar}>About Me</NavLink>
          <NavLink className={classes.navLink}  to={PROJECTS_PATH} activeClassName={classes.activeNavbar}>Projects</NavLink>
          <NavLink className={classes.navLink}  to={RESUME_PATH} activeClassName={classes.activeNavbar}>Resume</NavLink>
          <NavLink className={classes.navLink}  to={CONTACT_PATH} activeClassName={classes.activeNavbar}>Contact</NavLink>
        </nav>
        <div className={classes.page}>
          <TransitionGroup component={null}>
            <CSSTransition 
              key={transitionKey}
              timeout={SLIDE_DUR}
              mountOnEnter={false}
              unmountOnExit={true}
              onEnter={(node, isAppear) => this.enter(node, isAppear)}
              onEntering={(node, isAppear) => this.entering(node, isAppear)}
              onEntered={(node, isAppear) => this.entered(node, isAppear)}
              onExit={(node) => this.exit(node)}
              onExiting={(node) => this.exiting(node)}
              onExited={(node) => this.exited(node)}>
              <Switch location={this.state.currentLocation}>
                <Route path={PROJECTS_PATH +"/*"}>
                  <Redirect to={{
                      pathname: PROJECTS_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={PROJECTS_PATH}>
                  <Projects/>
                </Route>

                <Route path={RESUME_PATH +"/*"}>
                  <Redirect to={{
                      pathname: RESUME_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={RESUME_PATH}>
                  <Resume />
                </Route>

                <Route path={CONTACT_PATH +"/*"}>
                  <Redirect to={{
                      pathname: CONTACT_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={CONTACT_PATH}>
                  <Contact />
                </Route>

                <Route path={ABOUT_PATH +"/*"}>
                  <Redirect to={{
                      pathname: ABOUT_PATH,
                      state: {isRedirect: true}}}/>
                </Route>
                <Route path={ABOUT_PATH}>
                  <About />
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
    margin: '5% 15%',
    position: 'relative',
  },
  footer: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '2em',
    paddingBottom: '1em',
    
  },
  '@media(max-width: 1024px)': {
    page: {
      margin: '5% 5%',
    },
  },
  '@media(max-width: 500px)': {
    page: {
      margin: '2% 0',
    },
  },
  //for IE 10+
  '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)' : {
        page: {
          minHeight: '100%',
        },
  },
});

export default withRouter(withStyles(styles, {injectTheme: true})(App));
