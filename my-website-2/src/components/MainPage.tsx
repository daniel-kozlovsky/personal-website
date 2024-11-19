import React from 'react';
import Portrait from './Portrait';
import EmailButton from './EmailButton';
import GitHubButton from './GitHubButton';
import ContentsNav from './ContentsNav';
import ProjectCard from './ProjectCard';
import Heading from './Heading';
import Preface from './Preface';
import ExperienceCard from './ExperienceCard';
import HomeButton from './HomeButton';
function MainPage () {


    return (
        <div>
            <EmailButton />
            <GitHubButton/>
            <ContentsNav/>
            <Portrait />
            <Preface/>
            <h1>Projects</h1>
            <ProjectCard/>
            <h1>Experience</h1>
            <ExperienceCard/>
            <HomeButton/>
        </div>
    );
}


export default MainPage;