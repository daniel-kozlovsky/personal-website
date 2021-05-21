import React, {Component, Children} from 'react';
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
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }


    toggleVisibility() {
        this.setState({isVisible: !this.state.isVisible});
        //can add active state + checks here
    }

    renderChildren() {
        const {children} = this.props;
        const {classes} = this.props;
        //let button = <button type="button" onClick={this.toggleVisibility}><AiOutlineEllipsis/></button>;
        let newChildren = Children.map(children, (child, i) => {
            if(i === 0) {
            let icon = this.state.isVisible ? <AiOutlineMinus className={classes.collapseIcon}/> : <AiOutlinePlus className={classes.collapseIcon}/>;
                let withIcon = React.cloneElement(child, {}, ...child.props.children, icon);
                return (<button type="button" onClick={this.toggleVisibility}>{withIcon}</button>);//React.cloneElement(child, {}, ...child.props.children, button);
            }
            else if(this.state.isVisible) {
                return child;
            }
        });
        return newChildren;
    }

    render() {
        
        return (
        <>{this.renderChildren()}</>
        );
    }

    
}
const styles = (theme) => ({
    collapseIcon: {
        position: 'absolute',
        top: '50%',
        right: '-18px',
        transform: 'translate(-50%, -55%)',
    },
});

export default withStyles(styles, {injectTheme: true})(Toggleable);