import React, {Component, Children} from 'react';

import {AiOutlineEllipsis} from 'react-icons/ai';

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
        //let button = <button type="button" onClick={this.toggleVisibility}><AiOutlineEllipsis/></button>;
        let newChildren = Children.map(children, (child, i) => {
            if(i === 0) {
            return (<a onClick={this.toggleVisibility}>{child}</a>);//React.cloneElement(child, {}, ...child.props.children, button);
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

export default Toggleable;