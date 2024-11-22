import React from 'react';
import Portrait from './Portrait';
import EmailButton from './EmailButton';
import GitHubButton from './GitHubButton';
import ContentsNav from './ContentsNav';
import ProjectCard from './ProjectCard';
import Preface from './Preface';
import ExperienceCard from './ExperienceCard';
import HomeButton from './HomeButton';

//project images
import computerControlIcon from '../assets/CompControl.ico';
import malwareAnalysisImage from '../assets/malware_paper_thumbnail.png'
import onlineBookstoreImage from '../assets/online_bs_thumbnail.png';
import smartShopperImage from '../assets/smart_shopper_thumbnail.png';
import virtualShowroomImage from '../assets/VS_poster.png';

const PROJECT_HEADING = "Projects";
const EXPERIENCE_HEADING = "Experience";

//Project URLs
const computerControlURL = new URL("https://github.com/daniel-kozlovsky/ComputerControl");

function MainPage () {

    const contentsMap : Map<string, string> = new Map();
    contentsMap.set("heading-projects", PROJECT_HEADING);
    contentsMap.set("heading-experience", EXPERIENCE_HEADING);
    console.log("here you go: ", smartShopperImage);
    return (
        <div>
            <EmailButton />
            <GitHubButton/>
            <ContentsNav contentsMap={contentsMap}/>
            <Portrait />
            <Preface/>
            <div>
                <h1 id="heading-projects" className="section">{PROJECT_HEADING}</h1>
                <ProjectCard title="Virtual Showroom" description="Tile Sampling Showroom" imageSrc={virtualShowroomImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Malware Analysis" description="Analysis of DroidKungFu Malware" imageSrc={malwareAnalysisImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Smart Shopper" description="Online Shopping Website" imageSrc={smartShopperImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Online Bookstore" description="Bookstore web" imageSrc={onlineBookstoreImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Encryption Coursework" description="encryption materials from school" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Ainsley Harriot" description="Little Virus" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Computer Control" description="An app that let's you control your computer" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
            </div>
            <div>
                <h1 id="heading-experience" className="section">{EXPERIENCE_HEADING}</h1>
                <ExperienceCard startDate="2021" role="Sr. Software Security Engineer" location="Sun Life Financial"/>
                <ExperienceCard startDate="2020" role="Cyber Threat Intelligence Analyst" location="Bank of Montreal"/>
                <ExperienceCard startDate="2019" role="Software Developer" location="Bank of Montreal"/>
                <ExperienceCard startDate="2018" role="Quality Assurance Analyst" location="Bank of Montreal"/>
                <ExperienceCard startDate="2021" role="B.Eng., Spec. Hons. Software Engineering (Security)" location="York University"/>
            </div>
            <HomeButton/>
        </div>
    );
}


export default MainPage;