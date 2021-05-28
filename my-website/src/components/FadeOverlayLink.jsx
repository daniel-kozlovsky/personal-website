import {Children, Component} from 'react';
import withStyles from 'react-jss'

class FadeOverlayLink extends Component {


    render() {
        const childImg = Children.only(this.props.children);
        const {classes} = this.props;
        let overlay = 
        <div className={classes.overlay}>
            <a className={classes.link} href={this.props.href} download={this.props.download} rel={this.props.rel} target={this.props.target}>{this.props.linkText}</a> 
        </div>;

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
    console.log(parts);
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
        backgroundColor: `${addAlphaToRGB(theme.palette.select, 0.4)}`,
        transition: '.5s ease',

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