import React from 'react';
import withStyles from 'react-jss';

import {GoMarkGithub} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCopiedAlert: false,
        };
        this.handleEmailCopyClick = this.handleEmailCopyClick.bind(this);
    }
    
    handleEmailCopyClick() {
        navigator.clipboard.writeText("daniel.kozlovsky@gmail.com");
        this.setState({
            isCopiedAlert: true,
        });
        setTimeout(()=>{this.setState({isCopiedAlert: false})}, 1000);

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.column}>
                <h3>Email Me</h3>
                <a href="mailto:daniel.kozlovsky@gmail.com" rel="noopener noreferrer">
                    <AiOutlineMail/> 
                </a>
                <h4>- or -</h4>
                <button className={classes.copyEmail} type="button" onClick={this.handleEmailCopyClick}>{!this.state.isCopiedAlert ? "Click to Copy my Email" : "Copied!"}</button>
                </div>
                <div className={classes.column}>
                    <h3>See My Github</h3>
                    <a href="https://github.com/daniel-kozlovsky" target="_blank" rel="noopener noreferrer">
                        <GoMarkGithub/>
                    </a>
                </div>
            </div>
        );
    }

}

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        font: theme.mainText.font,
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '20%',
        '& h3': {
            font: theme.heading.font,
            color: theme.heading.color
        },
        '& h4': {
            font: theme.heading.font,
            fontSize: '1.5em',
            margin: '1% 0',
        },
        '& a': {
            color: theme.mainText.color,
            '&:visited, :active': {
                color: theme.mainText.color,
            },
            '&:hover': {
                backgroundColor: '#FFF',
                borderRadius: '50%',
            },
        },
        '& svg': {
            display: 'block',
            fontSize: '4em',
            padding: '0.2em',
            overflow: 'initial',
        },
    },
    copyEmail: {
        borderStyle: 'none',
        textAlign: 'left',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        boxSizing: 'border-box',
        font: theme.mainText.font,
        color: theme.mainText.color,
        marginTop: '8%',
        padding: '0.3em 0.6em',
        borderRadius: '20px',
        backgroundColor: '#AAA',
        '&:hover': {
            backgroundColor: '#FFF',
        },
    },

});

export default withStyles(styles, {injectTheme: true})(Contact);