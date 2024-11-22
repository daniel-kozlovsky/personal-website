import React from 'react';
import GitHubSVG from '../assets/GitHubIcon.svg'
import styles from '../styles/ContactButtons.module.css';


function GitHubButton () {

    return (
        <a href="https://github.com/daniel-kozlovsky" target="_blank" rel="noopener noreferrer">
            <img className={styles.button} src={GitHubSVG}/>
        </a>
    );
}

export default GitHubButton;