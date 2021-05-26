import React, { Component, Children} from 'react';
import withStyles from 'react-jss';
import {CSSTransition} from 'react-transition-group';

//import {AiOutlineEllipsis} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {GoDiffRenamed } from 'react-icons/go';

//Transition duration for toggle
const duration = 1000;

//First element is the title bar (clickable), all other elements are the toggleable content
class Toggleable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.isVisible,
        }
        this.collapsible = React.createRef();
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }


    toggleVisibility() {
        
        //can add active state + checks here
        let expand = this.collapsible.current;
        if(this.state.isVisible){
            expand.style.height = "0px";
        }
        else
        {
            expand.style.height = expand.scrollHeight + 'px';
        }
        this.setState({isVisible: !this.state.isVisible});
    }

    renderChildren() {
        const {children} = this.props;
        const {classes} = this.props;
        //let button = <button type="button" onClick={this.toggleVisibility}><AiOutlineEllipsis/></button>;
        let newChildren = Children.map(children, (child, i) => {
            if(i === 0) {
            let icon = this.state.isVisible ? <AiOutlineMinus className={classes.collapseIcon}/> : <AiOutlinePlus className={classes.collapseIcon}/>;
                let withIcon = React.cloneElement(child, {}, ...child.props.children, icon);
                return (<button className={classes.header} type="button" onClick={this.toggleVisibility}>{withIcon}</button>);//React.cloneElement(child, {}, ...child.props.children, button);
            }
            else{
                return (
                    <div className={classes.collapsible} ref={this.collapsible}>
                        {child}
                    </div>
                    );
            }
        });
        return newChildren;
    }

    render() {
        const {classes} = this.props;
        return (
            this.renderChildren()
            // <CSSTransition in={this.state.isVisible}
            //     timeout={duration}
            //     classNames={{
            //         enter: classes.enter,
            //         enterActive: classes.enterActive,
            //         enterDone: classes.enterDone,
            //         exit: classes.exit,
            //         exitActive: classes.exitActive,
            //         exitDone: classes.exitDone}}>
            //     <div className={classes.root}>
            //         {this.renderChildren()}
            //     </div>
            // </CSSTransition>
        );
    }
}
const styles = (theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    collapsible: {
        //position: 'absolute',
        //flex: 1,
        height: 0,
        overflow: 'hidden',
        transition: 'height 1s',
    },
    header: {
        //flex: 1,
    },
    collapseIcon: {
        position: 'absolute',
        top: '50%',
        right: '-18px',
        transform: 'translate(-50%, -55%)',
    },
    // overlay: {
    //     height: '100px',
    // },
    enter: {
        // maxHeight: '0',
        // visibility: 'hidden',
    },
    enterActive: {
        // maxHeight: 'calc(1 / calc(100vw))',
        // // visibility: 'hidden',
        // transition: `max-height ${duration}ms`,
    },
    enterDone: {
        // height: '250px',
        // maxHeight: 'calc(1 / calc(100vw))',
    },
    exit: {
        //maxHeight: 'calc(1 / calc(100vw))',
        //height: '250px',
    },
    exitActive: {
        //  transform: 'scaleY(0)',
        //  transformOrigin: 'top',
        //height: 0,
        //maxHeight: '0',
        //transition: `max-height ${duration}ms`,
    },
    exitDone: {
        //maxHeight: '0',
    },
});

export default withStyles(styles, {injectTheme: true})(Toggleable);
