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
      transitionKey: this.props.location.key,
      currentLocation: this.props.location,
    };
    document.body.style.backgroundColor = theme.page.backgroundColor;

    this.scrollToID = this.scrollToID.bind(this);
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps, this.props, prevProps === this.props ? "true": "false");
    //console.log(prevState, this.state, prevState === this.state);
    //slide direction on page change
    const newKey = this.props.location.key;
    const {pathname} = this.props.location;
    const oldPath = prevProps.location.pathname;
    //console.log(oldPath, pathname);
    //path change
    if(pathname !== oldPath) {
      //console.log("new ", pathname, "old ", oldPath);
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

    //when link to URI fragment
    const {hash} = this.props.location;
    const prevHash = prevProps.location.hash;
    
    if(hash && (prevHash !== hash)) {
      //console.log("hash ", hash, "prev ",prevHash);
      //let id = hash.split("#")[1];
      //this.scrollToID(id);
    }
  }

  // updateKey() {
  //   const {location} = this.props;
  //   console.log("updated key: ", location.key);
  //   this.setState({transitionKey: location.key});
  //   console.log("updated key: ", location.key);

  // }
  
  scrollToID(hash) {
    let id = hash.split("#")[1];
    let element = document.getElementById(id);
    //console.log(element);
    if(element) {
      //element too big to center
      if(element.getBoundingClientRect().height > window.innerHeight) {
        //put element to top of screen
        //console.log("y: ", window.scrollY, "top: ", element.getBoundingClientRect().top)
        window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY)
        
      }
      else {
        //center element
        window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY - (window.innerHeight/2 - element.getBoundingClientRect().height / 2));
      }
      //console.log("scrolledto: ", window.scrollY);
      
    }
  }

  // updateSlideDirection(e)
  // {

  //   const {location} = this.props;
  //   if(pathMap[e.target.pathname] > pathMap[location.pathname])
  //   {
  //     this.setState({
  //       leftSlide: false,
  //     });
  //   }
  //   else if(pathMap[e.target.pathname] === pathMap[location.pathname])
  //   {
  //     e.preventDefault();
  //   }
  //   else
  //   {
  //     this.setState({
  //       leftSlide: true,
  //     });
  //   }
  // }

   enter(node, isAppear) {
    //console.log("enter ", this.state.leftSlide, node);
    
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
    //console.log("entering", this.state.leftSlide, node);
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
  entered(node, isAppear) {
    //console.log("entered", this.state.leftSlide, node);
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
    //console.log("exit ", this.state.leftSlide, node);
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transform:translate(0,0);`
    }
    
  }
  exiting(node) {
    //console.log("exiting ", this.state.leftSlide, node);
    if(node && (this.props.location.state ? this.props.location.state.Redirect : true)) {
      node.style.cssText += `
      max-width:100%;
      position:absolute;
      transition:transform ${SLIDE_DUR}ms ease-out`
      node.style.transform = `translate(${this.state.leftSlide ? transistionDistance : "-" + transistionDistance},0)`;
    }
  }
  exited(node) {
    //console.log("exited ", this.state.leftSlide, node);
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
