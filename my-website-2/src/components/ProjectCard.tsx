import React, { ReactHTMLElement } from 'react';
import GitHubSVG from '../assets/GitHubIcon.svg'
import { URL } from 'url';

type Props  = {

    title: string;
    description: string;
    imageSrc: string;
    gitHubURL: URL | undefined;

};

function ProjectCard ({title, description, imageSrc, gitHubURL} : Props) {
    

    return (
        <div className="project-card">
            <img className="project-card-img" src={imageSrc}/>
            <h2>
                {title}
            </h2>
            <p className="project-card-desc">
                {description}
            </p>
            {gitHubURL ? (
                <a href={gitHubURL.toString()} target="_blank" rel="noopener noreferrer">
                    <img src={GitHubSVG}/>
                </a>)
                : null 
                }
                {/*video*/}
                {/*link/demo*/}
        </div>
    );
}

export default ProjectCard;