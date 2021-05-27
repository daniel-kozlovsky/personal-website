import React from 'react';
import {Switch, Route, NavLink, withRouter} from 'react-router-dom';
import withStyles from 'react-jss';
import {TransitionGroup} from 'react-transition-group';
import {CSSTransition} from 'react-transition-group';


import Contact from './routes/Contact';
import About from './routes/About';
import Resume from './routes/Resume';
import Projects from './routes/Projects';
import Footer from './Footer';

export const ABOUT_PATH = "/";
export const PROJECTS_PATH = "/Projects";
export const CONTACT_PATH = "/Contact";
export const RESUME_PATH = "/Resume";

const pathMap = {
  [ABOUT_PATH] : 1,
  [PROJECTS_PATH]: 2,
  [RESUME_PATH]: 3,
  [CONTACT_PATH]: 4,
};
const SLIDE_DUR = 600;

class App extends React.Component {
  
  constructor(props) {
    super(props);
    const {theme} = this.props;
    const {classes} = this.props;
    this.state = {
      leftSlide: true,
      leftSlideClasses: {
        enter: classes.enter,
        enterActive: classes.enterActive,
        enterDone: classes.enterDone,
        exit: classes.exit,
        exitActive: classes.exitActive,
        exitDone: classes.exitDone
      },
      rightSlideClasses: {
        enter: classes.enterRight,
        enterActive: classes.enterRightActive,
        enterDone: classes.enterRightDone,
        exit: classes.exitRight,
        exitActive: classes.exitRightActive,
        exitDone: classes.exitRightDone
      },
    };
    document.body.style.backgroundColor = theme.page.backgroundColor;

    this.updateSlideDirection = this.updateSlideDirection.bind(this);
  }

  updateSlideDirection(e)
  {

    const {location} = this.props;
    console.log("target:" + pathMap[e.target.pathname], "current:" +pathMap[location.pathname]);
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
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:absolute;`

    node.style.transform = `translate(${this.state.leftSlide ? "-100vw" : "100vw"},0)`;
  }
  entering(node, isAppear) {
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:absolute;\
    transform:translate(0,0);
    transition:transform ${SLIDE_DUR}ms ease-out`
  }
  entered(node, isAppear) {
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:relative;\
    transform:translate(0,0);`
  }
  exit(node, isAppear) {
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:absolute;\
    transform:translate(0,0);`
  }
  exiting(node, isAppear) {
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:absolute;\
    transition:transform ${SLIDE_DUR}ms ease-out`

    node.style.transform = `translate(${this.state.leftSlide ? "100vw" : "-100vw"},0)`;
  }
  exited(node, isAppear) {
    node.style.cssText += `\
    height:100%;\
    width:100%;\
    position:relative;`

    node.style.transform = `translate(${this.state.leftSlide ? "100vw" : "-100vw"},0)`;
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
              mountOnEnter={false}
              unmountOnExit={true}
              onEnter={(node, isAppear) => this.enter(node, isAppear)}
              onEntering={(node, isAppear) => this.entering(node, isAppear)}
              onEntered={(node, isAppear) => this.entered(node, isAppear)}
              onExit={(node, isAppear) => this.exit(node, isAppear)}
              onExiting={(node, isAppear) => this.exiting(node, isAppear)}
              onExited={(node, isAppear) => this.exited(node, isAppear)}>
              {/* classNames={this.state.leftSlide ? this.state.leftSlideClasses : this.state.rightSlideClasses}> */}
              <Switch location={location}>
                <Route path={PROJECTS_PATH} component={Projects}/>
                <Route path={RESUME_PATH} component={Resume}/>
                <Route path={CONTACT_PATH} component={Contact}/>
                <Route path={ABOUT_PATH} component={About}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          
        </div>
        <div className={classes.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  a:{},b:{},
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
    // minHeight: 'calc(100vh - 29em)',
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

  },
  // enter: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(-100vw, 0)',
    
  // },
  // enterActive: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(0,0)',
  //   transition: `transform ${SLIDE_DUR}ms ease-out`,
    
  // },
  // enterDone: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'relative',
  //   transform: 'translate(0,0)',
    
  // },
  // exit: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(0,0)',
    
  // },
  // exitActive: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(100vw, 0)',
  //   transition: `transform ${SLIDE_DUR}ms ease-out`,
    
  // },
  // exitDone: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'relative',
  //   transform: 'translate(100vw, 0)',
  // },
  // /***********************slide "screen" right *******************/
  // enterRight: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(100vw, 0)',
    
  // },
  // enterRightActive: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(0,0)',
  //   transition: `transform ${SLIDE_DUR}ms ease-out`,
    
  // },
  // enterRightDone: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'relative',
  //   transform: 'translate(0,0)',
    
  // },
  // exitRight: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(0,0)',
    
  // },
  // exitRightActive: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   transform: 'translate(-100vw, 0)',
  //   transition: `transform ${SLIDE_DUR}ms ease-out`,
    
  // },
  // exitRightDone: {
  //   height: '100%',
  //   width: '100%',
  //   position: 'relative',
  //   transform: 'translate(-100vw, 0)',
  // },

});

export default withStyles(styles, {injectTheme: true})(withRouter(App));
