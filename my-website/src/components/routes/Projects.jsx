import React from 'react';
import withStyles from 'react-jss';

class Projects extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <video className={classes.media} alt="pr1">
                    Hmm it seems your browser doesn't support Video
                </video>
                <div className={classes.description}>
                    <h3>Virtual Showroom</h3>
                    <p>This project was a VR showroom...</p>
                </div>
                <img className={classes.media} alt="pr2"/>
                <div className={classes.description}>
                    <h3>Shopping Website</h3>
                    <p>This project was a Shopping Website</p>
                </div>
                <img className={classes.media} alt="pr3"/>
                <div className={classes.description}>
                    <h3>Online Bookstore</h3>
                    <p>this was an online bookstore project</p>
                </div>
                <img className={classes.media} alt="pr4"/>
                <div className={classes.description}>
                    <h3>Malware Family Research Paper</h3>
                    <p>This project was a Malware Family Research Paper...</p>
                </div>
            </div>
        );
    }

}

const styles = (theme) => ({
    media: {},
    description: {},
});

export default withStyles(styles, {injectTheme: true})(Projects);