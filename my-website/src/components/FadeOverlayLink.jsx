import {createRef, Children, Component} from 'react';
import withStyles from 'react-jss'
import {addAlphaToRGB} from '../utility.js'

/**
 * Clickable overlay that fades when moused over. Typically used for images or visual, clickable content
 */
class FadeOverlayLink extends Component {

    constructor(props) {
        super(props);
        //reference to the anchor for clicking
        this.anchor = createRef();
    }

    render() {
        const childImg = Children.only(this.props.children);
        const {classes} = this.props;
        let overlay =
        <a ref={this.anchor} className={classes.link} href={this.props.href} download={this.props.download} rel={this.props.rel} target={this.props.target}>
            <div className={classes.overlay}>
                {this.props.linkText}
            </div>
        </a>
        ;

        return (
            <>
                {childImg}
                {overlay}
            </>
        );
    };

}


const styles = (theme) => ({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        opacity: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${addAlphaToRGB(theme.palette.select, 0.8)}`,
        transition: '.5s ease',
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
        },
    },
    link: {
        font: theme.mainText.font,
        textDecoration: 'none',
        color: theme.mainText.color,
        '&:visited': {
            color: theme.mainText.color,
        },
        '&:hover': {
            color: theme.mainText.color,
        },
        '&:active': {
            color: theme.mainText.color,
        },
    },
});

export default withStyles(styles, {injectTheme: true})(FadeOverlayLink);