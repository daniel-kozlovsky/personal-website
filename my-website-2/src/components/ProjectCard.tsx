import React, { ReactHTMLElement } from 'react';
import styles from '../styles/ProjectCard.module.css';
import theme from '../styles/Theme.module.css';
import {ReactComponent as GitHubSVG} from '../assets/GitHubIcon.svg'
import { URL } from 'url';

type Props  = {

    title: string;
    description: string;
    imageSrc: string;
    gitHubURL: URL | undefined;

};

function ProjectCard ({title, description, imageSrc, gitHubURL} : Props) {
    

    return (
        <div className={styles.container}>
            <img className={styles.image} src={imageSrc}/>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
            {gitHubURL ? (
                <a className={styles.githubLink} href={gitHubURL.toString()} target="_blank" rel="noopener noreferrer">
                    <GitHubSVG/>
                </a>)
                : null 
                }
        </div>
    );
}

export default ProjectCard;