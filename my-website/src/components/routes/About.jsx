import React from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';

import {PROJECTS_PATH} from '../App.jsx';

import myPortrait from '../../media/img/headshot.png';

class About extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <img className={classes.portrait} src={myPortrait} alt="My Portrait"/>
                <div className={classes.textBlock}>
                    <p className={classes.text}>
                        Hi, I'm Daniel and I'm an adventurer through the world of computers. I'm mainly interested in programming and passionate about 
                        computer security. In fact, I'm always looking for opportunities to combine the two. I recently finished school, where I earned my Software Engineering degree
                        and got the chance to work on cool projects like <Link onClick={e => this.props.determineSlide(e)} to={PROJECTS_PATH}>these</Link>.
                    </p>
                    <p className={classes.text}>
                        Programming allows me to build things, exercising my creativity and problem solving technique. As a result I have fun programming, and learning new 
                        technologies on the way. In addition, computer security is important to me because I believe it's essential for advancing cyber technologies. I believe
                        people should feel safe and comfortable when using software; online and offline. The security field itself deeply interests me because of 
                        the puzzling problems faced, which require clever solutions. 
                    </p>
                </div>
            </div>
        );
    }
}

const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    portrait: {
        maxWidth: '30%',
        minWidth: '15em',
        height: 'auto',
        borderRadius: '20%',
        marginRight: '10%',
    },
    textBlock: {
        flexBasis: '60%',
        flexGrow: '1',
    },
    text: {
        marginTop: '1.5em',
        marginBottom: '1.5em',
        font: theme.mainText.font,
    },
});

export default withStyles(styles, {injectTheme: true})(About);