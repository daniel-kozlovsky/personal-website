import {Component} from 'react';
import withStyles from 'react-jss';

/**
 * Fixed position modal for displaying alerts, or urgent information
 */
class Modal extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root} onClick={this.props.onClose}>
                <div className={classes.box}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const style = (theme) => ({
    root: {
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '2',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(223,231,246,0.8)',
    },
    box: {
        backgroundColor: theme.palette.primary,
        padding: '2em',
        maxWidth: '35%',
        borderRadius: '5px',
    },
    //smaller devices like phones
    '@media(max-width: 700px)':
    {
        box: {
            maxWidth: '80%',
        },
    },
    //for browsers that support backdrop blur
    '@supports ((-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px)))':
    {
        root: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(5px)',
        },
    },
});
export default withStyles(style, {injectTheme: true})(Modal);