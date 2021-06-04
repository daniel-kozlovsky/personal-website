import {Component} from 'react';
import withStyles from 'react-jss';

import {GoMarkGithub} from 'react-icons/go';

import Modal from './Modal';

/**
 * The footer of the website. Should persist through all pages or views.
 */
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleAboutClick = this.handleAboutClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    /**
     * Enables the modal when the "about" button is clicked.
     */ 
    handleAboutClick() {
        this.setState({
            showModal: true
        });
    }

    /**
     * When clicked outside the modal to close it.
     */
    handleCloseClick() {
        this.setState({
            showModal: false
        });
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <button type="button" className={classes.aboutButton} onClick={this.handleAboutClick}>About the Website</button>
                <label className={classes.copyNotice}>&#169; Copyright 2021 Daniel Kozlovsky</label>
                {this.state.showModal ? 
                <Modal onClose={this.handleCloseClick}>
                    <div className={classes.modalContent}>
                        <p>
                            This website is owned and operated by me, Daniel Kozlovsky :). 
                        </p>
                        <p>
                            I built it with React.js on Node.js with a few modules like React Router and JSS. Various icons are from React Icons.
                            My portrait was drawn by my sister! 
                        </p>
                        <p>
                            Interested in my code? Want to see how I did something? See on&nbsp;
                            <a href="https://github.com/daniel-kozlovsky/personal-website" target="_blank" rel="noopener noreferrer">my Github <GoMarkGithub/></a>
                        </p>
                        <label className={classes.copyNotice}>&#169; Copyright 2021 Daniel Kozlovsky</label>
                    </div>
                </Modal>
                : null}
            </div>
        );
    }

}

const style = (theme) => ({
    root: {
        font: theme.mainText.font,
        color: theme.mainText.color,
        display: 'block',
    },
    aboutButton: {
        ...theme.buttonStyle,
        display: 'block',
        margin: 'auto',
    },
    copyNotice: {
        fontSize: '0.8em',
        display: 'block',
        textAlign: 'center',
    },
    modalContent: {
        '& $copyNotice': {
            marginTop: '10%',
        },
    },
});

export default withStyles(style, {injectTheme: true})(Footer);