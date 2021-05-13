import React from 'react';
import withStyles from 'react-jss';

import {GoMarkGithub} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';


class Contact extends React.Component {


    render() {
        return (
            <div>
                <h3>Feel free to reach out via email or checkout my Github</h3>
                <a>
                    <AiOutlineMail/>
                    <label>Email: myemail</label>
                </a>
                <a>
                    <GoMarkGithub/>
                    <label>github: mygit</label>
                </a>
            </div>
        );
    }

}

const styles = (theme) => ({
    root: {},

});

export default withStyles(styles)(Contact);