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
const smartShopperURL = new URL("https://github.com/AkinAD/basedCode");

//Project Descriptions
const vrShowroomDesc = "Visualize different tiling and materials on home interior surfaces with virtual reality.";
const malwareDesc = "Research paper on the TTPs, IoCs and impact of the DroidKungFu and Plankton malware families";
const smartShopperDesc = "Imitation shopping website that can calculate the optimal route through the store from the user's cart. \
    Complete with authentication, IAM, and product management.";
const bookStoreDesc = "An e-commerce application, part of a school project, that allows users to view books, read \
    and write book reviews, and manage the user's cart, account and orders";
const encryptionDesc = "Various encryption utility functions";
const ainsleyDesc = "A fun, non-malicious \"virus\" that forces the victim to watch a short, painful video";
const ccDesc = "Lightweight utility app that provides a user interface to turn off, restart or hiberate your computer. This was created \
at the time when Windows 8 was released and had no UI to turn off the computer.";

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
                <ProjectCard title="Virtual Showroom" description={vrShowroomDesc} imageSrc={virtualShowroomImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Malware Analysis" description={malwareDesc} imageSrc={malwareAnalysisImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Smart Shopper" description={smartShopperDesc} imageSrc={smartShopperImage} gitHubURL={smartShopperURL} />
                <ProjectCard title="Online Bookstore" description={bookStoreDesc} imageSrc={onlineBookstoreImage} gitHubURL={computerControlURL} />
                <ProjectCard title="Encryption Coursework" description={encryptionDesc} imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Ainsley Harriot" description={ainsleyDesc} imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
                <ProjectCard title="Computer Control" description={ccDesc} imageSrc={computerControlIcon} gitHubURL={computerControlURL} />
            </div>
            <h1 className={styles.heading}>{EXPERIENCE_HEADING}</h1>
            <div className={styles.experienceContainer}>
                <ExperienceCard startDate="Since 2021" role="Sr. Software Security Engineer" location="Sun Life Financial" workLogoSrc={SLFLogo}/>
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