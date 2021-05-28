import React from 'react';
import withStyles from 'react-jss';

import {GoMarkGithub} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';

const ea = [100, 97, 110, 105, 101, 108, 46, 107, 111, 122, 108, 111, 118, 115, 107, 121, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCopiedAlert: false,
        };
        this.handleEmailCopyClick = this.handleEmailCopyClick.bind(this);
        this.getStringFromByteArray = this.getStringFromByteArray.bind(this);
    }
    
    async handleEmailCopyClick() {

        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            if(!window.clipboardData) {
                alert('Copy to clipboard is not supported on your browser');
            }
            else
            {
                await window.clipboardData.setData('Text', this.getStringFromByteArray(ea));
            }
                
            return;
        }

        await navigator.clipboard.writeText(this.getStringFromByteArray(ea));
        this.setState({
            isCopiedAlert: true,
        });
        setTimeout(()=>{this.setState({isCopiedAlert: false})}, 1000);

    }
    getStringFromByteArray(array) {
        return String.fromCharCode(...array);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.column}>
                <h3>Email Me</h3>
                <a href={`mailto:${this.getStringFromByteArray(ea)}`} rel="noopener noreferrer">
                    <AiOutlineMail/> 
                </a>
                <h4>- or -</h4>
                <button className={classes.copyEmail} type="button" onClick={this.handleEmailCopyClick}>{!this.state.isCopiedAlert ? "Copy my Email" : "Copied!"}</button>
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
        alignItems: 'flex-start',
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em 0',
        textAlign: 'center',
        columnGap: '3%',
        flex: '1 0 40%',
        minWidth: '15em',
        '& h3': {
            font: theme.heading.font,
            color: theme.heading.color,
            marginBottom: '2em',
            flexBasis: '100%',
        },
        '& h4': {
            font: theme.heading.font,
            fontSize: '1em',
            margin: '4% 0',
        },
        '& a': {
            color: theme.mainText.color,
            '&:visited, :active': {
                color: theme.mainText.color,
            },
            '&:hover': {
                backgroundColor: theme.palette.select,
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
        ...theme.buttonStyle,
        font: theme.heading.font,
        fontSize: '1.5em',
        minWidth: '8.7em',
    },

});

export default withStyles(styles, {injectTheme: true})(Contact);