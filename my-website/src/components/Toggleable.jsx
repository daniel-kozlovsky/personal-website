import {createRef, cloneElement, Component, Children} from 'react';
import withStyles from 'react-jss';

import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

/**
 * Collapsible content with header
 */
class Toggleable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.isVisible,
        }
        this.collapsible = createRef();
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }

    componentDidMount()
    {
        const expand = this.collapsible.current;
        //Set height to auto for resizing after transitions
        //IE 11
        if(!expand.ontransitionend) {
            expand.addEventListener('transitionend', async() => {
                this.setState({isVisible: !this.state.isVisible}, () => {expand.style.height = this.state.isVisible ? "auto" : "0px";});
            });
        }
        else //most other browsers
        {
            expand.ontransitionend = async() => {
                this.setState({isVisible: !this.state.isVisible}, () => {expand.style.height = this.state.isVisible ? "auto" : "0px";});
            };
        }
    }

    /**
     * Handle the expand and collapse of the content
     */
    toggleVisibility() {
        
        const {isVisible} = this.state;
        const expand = this.collapsible.current;

        //switch from auto to enable transition
        expand.style.height = `${expand.offsetHeight}px`;
        //timeout for the browser to catch the css change/reflow
        setTimeout( () => {
            //contract
            if(isVisible){
                expand.style.height = "0px";
            }
            //expand
            else
            {
                expand.style.height = expand.scrollHeight + 'px';
            }
        }, 50);
        
    }

    /**
     * Processes children for rendering. Wraps the header in a button. 
     */ 
    renderChildren() {
        const {children} = this.props;
        const {classes} = this.props;
        
        //Takes first child as header and all other children as collapsible
        let newChildren = Children.map(children, (child, i) => {
            if(i === 0) {
            let icon = this.state.isVisible ? <AiOutlineMinus className={classes.collapseIcon}/> : <AiOutlinePlus className={classes.collapseIcon}/>;
                let withIcon = cloneElement(child, {}, ...child.props.children, icon);
                return (<button className={classes.header} type="button" onClick={this.toggleVisibility}>{withIcon}</button>);
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
        height: "0px",
        overflow: 'hidden',
        transition: 'height 250ms ease-out',
    },
    collapseIcon: {
        position: 'absolute',
        top: '50%',
        right: '-18px',
        transform: 'translate(-50%, -55%)',
    },
});

export default withStyles(styles, {injectTheme: true})(Toggleable);
