import React from 'react';
import Portrait from './Portrait';
import EmailButton from './EmailButton';
import GitHubButton from './GitHubButton';
import ContentsNav from './ContentsNav';
import ProjectCard from './ProjectCard';
import Preface from './Preface';
import ExperienceCard from './ExperienceCard';
import HomeButton from './HomeButton';

import styles from '../styles/MainPage.module.css';

//project images
import computerControlIcon from '../assets/CompControl.ico';
import malwareAnalysisImage from '../assets/malware_paper_thumbnail.png'
import onlineBookstoreImage from '../assets/online_bs_thumbnail.png';
import smartShopperImage from '../assets/smart_shopper_thumbnail.png';
import virtualShowroomImage from '../assets/VS_poster.png';

//work logos
import BMOLogo from '../assets/BMO_Logo.png';
import SLFLogo from '../assets/Sun-Life-Financial-Logo.png';
import YULogo from '../assets/york_logo.png';


const PROJECT_HEADING = "Projects";
const EXPERIENCE_HEADING = "Experience";

//Project URLs
const computerControlURL = new URL("https://github.com/daniel-kozlovsky/ComputerControl");

function MainPage () {

    const contentsMap : Map<string, string> = new Map();
    contentsMap.set("heading-projects", PROJECT_HEADING);
    contentsMap.set("heading-experience", EXPERIENCE_HEADING);
    
    return (
        <div className={styles.mainPage}>
            <div className={styles.intro}>
            <Portrait />
            <Preface/>
            </div>
            <h1 className={styles.heading}>{PROJECT_HEADING}</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard title="Virtual Showroom" description="Tile Sampling Showroom" imageSrc={virtualShowroomImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Malware Analysis" description="Analysis of DroidKungFu Malware; very lonmg sentence;a dfajhlfjasdlkfjsdlkjfasdlkfjsda'
                asdfkjasdfkjlsdfjklAnalysis of DroidKungFu Malware; very lonmg sentence;a dfajhlfjasdlkfjsdlkjfasdlkfjsda'asdfkjasdfkjlsdfjklAnalysis of 
                roidKungFu Malware; very lonmg sentence;a dfajhlfjasdlkfjsdlkjfasdlkfjsda'asdfkjasdfkjlsdfjklAnalysis of DroidKungFu Malware; very lonmg sentence;a 
                dfajhlfjasdlkfjsdlkjfasdlkfjsda'asdfkjasdfkjlsdfjkl" imageSrc={malwareAnalysisImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Smart Shopper" description="Online Shopping Website" imageSrc={smartShopperImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Online Bookstore" description="Bookstore web" imageSrc={onlineBookstoreImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Encryption Coursework" description="encryption materials from school" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Ainsley Harriot" description="Little Virus" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Computer Control" description="An app that let's you control your computer" imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
            </div>
            <h1 className={styles.heading}>{EXPERIENCE_HEADING}</h1>
            <div className={styles.experienceContainer}>
                <ExperienceCard startDate="3 Years" role="Sr. Software Security Engineer" location="Sun Life Financial" workLogoSrc={SLFLogo}/>
                <ExperienceCard startDate="4 Months" role="Cyber Threat Intelligence Analyst" location="Bank of Montreal" workLogoSrc={BMOLogo}/>
                <ExperienceCard startDate="4 Months" role="Software Developer" location="Bank of Montreal" workLogoSrc={BMOLogo}/>
                <ExperienceCard startDate="1 Year" role="Quality Assurance Analyst" location="Bank of Montreal" workLogoSrc={BMOLogo}/>
                <ExperienceCard startDate="5 Years" role="B.Eng., Spec. Hons. Software Engineering (Security)" location="York University" workLogoSrc={YULogo}/>
            </div>
            <div className={styles.contactIcons}>
                <EmailButton />
                <GitHubButton/>
            </div>
            {/* <ContentsNav contentsMap={contentsMap}/> */}
            <HomeButton/>
        </div>
    );
}

function getDiffFromTodayInYears(year : string) : number
{
    let diff :number = 0;

    return diff;
}


export default MainPage;