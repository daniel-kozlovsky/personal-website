import {Component} from 'react';
import withStyles from 'react-jss';

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
        backdropFilter: 'blur(5px)',
    },
    box: {
        backgroundColor: theme.palette.primary,
        padding: '1em',
        borderRadius: '5px',
    }
});
export default withStyles(style, {injectTheme: true})(Modal);