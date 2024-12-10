import React from 'react';
import {ReactComponent as GHIcon} from '../assets/GitHubIcon.svg'
import styles from '../styles/ContactButtons.module.css';


function GitHubButton () {

    return (
        
        <a className={styles.button} href="https://github.com/daniel-kozlovsky" target="_blank" rel="noopener noreferrer">
            <GHIcon />
        {/* <img className={styles.button} src={GitHubSVG}/> */}
        </a>
    );
}

export default GitHubButton;