import React, { Component, Children} from 'react';
import withStyles from 'react-jss';

//import {AiOutlineEllipsis} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

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
        height: 0,
        overflow: 'hidden',
        transition: 'height 300ms ease-out',
    },
    collapseIcon: {
        position: 'absolute',
        top: '50%',
        right: '-18px',
        transform: 'translate(-50%, -55%)',
    },
});

export default withStyles(styles, {injectTheme: true})(Toggleable);
