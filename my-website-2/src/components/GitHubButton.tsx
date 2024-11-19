import React from 'react';
import GitHubSVG from '../assets/GitHubIcon.svg'


function GitHubButton () {

    return (
        <a href="https://github.com/daniel-kozlovsky" target="_blank" rel="noopener noreferrer">
            <img src={GitHubSVG}/>
        </a>
    );
}

export default GitHubButton;