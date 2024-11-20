import React from 'react';
import Portrait from './Portrait';
import EmailButton from './EmailButton';
import GitHubButton from './GitHubButton';
import ContentsNav from './ContentsNav';
import ProjectCard from './ProjectCard';
import Preface from './Preface';
import ExperienceCard from './ExperienceCard';
import HomeButton from './HomeButton';

const PROJECT_HEADING = "Projects";
const EXPERIENCE_HEADING = "Experience";
function MainPage () {

    const contentsMap : Map<string, string> = new Map();
    contentsMap.set("heading-projects", PROJECT_HEADING);
    contentsMap.set("heading-experience", EXPERIENCE_HEADING);

    return (
        <div>
            <EmailButton />
            <GitHubButton/>
            <ContentsNav contentsMap={contentsMap}/>
            <Portrait />
            <Preface/>
            <h1 id="heading-projects" className="section">{PROJECT_HEADING}</h1>
            <ProjectCard/>
            <h1 id="heading-experience" className="section">{EXPERIENCE_HEADING}</h1>
            <ExperienceCard/>
            <HomeButton/>
        </div>
    );
}


export default MainPage;