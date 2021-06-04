import {createRef, Children, Component} from 'react';
import withStyles from 'react-jss'

class FadeOverlayLink extends Component {

    constructor(props) {
        super(props);
        this.anchor = createRef();
        this.handleOverlayClick = this.handleOverlayClick.bind(this);
    }

    handleOverlayClick(e) {
        console.log(e);
        this.anchor.current.click();
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

//rgb(0,0,0)
function addAlphaToRGB(rgb, alpha) {
    let parts = rgb.split(",");
    parts[0] = "rgba("+ parts[0].split("(")[1];
    parts[2] = parts[2].split(")")[0];
    parts[3] = `${alpha})`;
    return parts.join();
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