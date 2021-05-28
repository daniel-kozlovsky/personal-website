import React from 'react';
import withStyles from 'react-jss';

import resume from '../../media/content/full_resume_web.pdf';

import {GrDocumentDownload} from 'react-icons/gr';
import Toggleable from '../Toggleable'
import {PROJECTS_PATH} from '../App';
import {VIRTUAL_SHOWROOM_ID, RESEARCH_PAPER_ID, SMART_SHOPPER_ID, ONLINE_BOOKSTORE_ID} from './Projects';

class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highSkills: ['Java', 'J2EE' ,'JUnit', 'JPA', 'JDBC', 'JSP', 'Servlets', 'Maven', 'C#', 'Git'],
            mediumSkills: ['C', 'C++', 'Unix', 'HTML','CSS', 'JavaScript', 'React.js', 'Vue.js', 'SQL', 'PHP',
             'PowerShell', 'Kali Linux', 'Docker', 'Firebase', 'IBM Cloud', 'Unity', 'SteamVR' ],
        };
        this.createSkillsHTML = this.createSkillsHTML.bind(this);
    }

    createSkillsHTML(skillsArray, className) {
        const {classes} = this.props;
        let elements = [];
        skillsArray.forEach((element) => {
            if(className === "highSkill")
            {
                elements.push(<label key={element} className={classes.highSkill}>{element}</label>);
            }
            else if(className === "mediumSkill")
            {
                elements.push(<label key={element} className={classes.mediumSkill}>{element}</label>);
            }
            
        });
        return elements;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <a className={classes.download} href={resume} download="Daniel_Kozlovsky_Resume.pdf"><GrDocumentDownload/> Download My Comprehensive Resume</a>
                <div>
                    <hr className={`${classes.mainDivider} ${classes.sectionDivider}`}/>
                </div>
                <div className={`${classes.section} ${classes.odd}`}>
                    <h3 className={classes.sectionHeader}>Employment</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <div className={classes.workInfo}>
                                        <h4>Cyber Threat Intelligence Analyst</h4>
                                        <label>BMO Financial Group - Toronto, Canada</label>
                                    </div>
                                    <label className={classes.date}>May 2020 – Sept 2020</label>
                                </div>
                                <p>
                                    For my last internship, I wanted to explore my love for computer security so I started working in Cyber Threat Intelligence. I was tasked with researching
                                    and monitoring cyber threats to the company and providing those reports to senior and executive management. With little to no technical work here, I took
                                    the chance to learn as much as I can about cyber threats, TTPs, APTs, CVEs, and focused on developing my soft skills. My research, writing and presentation 
                                    skills definitely improved. Sometimes, there was a chance to get technical and work closely with SOC teams to provide IoCs and analyze company exposure to 
                                    threats and vulnerabilities. 
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <div className={classes.workInfo}>
                                        <h4>Software Developer</h4>
                                        <label>BMO Financial Group - Toronto, Canada</label>
                                    </div>
                                    <label className={classes.date}>Mar 2019 – Sept 2019</label>
                                </div>
                                <p>
                                    In my role as developer at BMO, I was on the team responsible for the bank’s wire transfer system and worked on maintaining and updating the system, as
                                    well as an attached, reporting, java application. I wrote hundreds of JUnit tests and discovered enough bugs to prompt a maintenance release. In my time there,
                                    I was exposed to many interesting frameworks, toolchains and DevOps processes that gave me an expanded understanding of the SDLC and development process. 
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <div className={classes.workInfo}>
                                        <h4>Quality Assurance Analyst</h4>
                                        <label>BMO Financial Group - Toronto, Canada</label>
                                    </div>
                                    <label className={classes.date}>Sept 2018 – Mar 2019</label>
                                </div>
                                <p>
                                    This was my first job in the industry as an intern and it was a massive learning experience. As a QA on the team responsible 
                                    for the bank's wire transfer system, I made sure all of our updates and maintenance was tested and up to requirements. At an enterprise like
                                    this, I got a look into the complicated systems in place to deliver the bank's services and learned to work with different teams to achieve a
                                    common goal. I was commended by my team for my initiative where I saved my teammates' time doing repetitive tasks by automating them. In addition,
                                    I discovered some vulnerabilities in a vendor application when I decided to try some pen-testing. Ultimately my team was happy with my performance, 
                                    and offered me a promotion and contract extension.    
                                </p>
                            </Toggleable>
                        </div>
                    </div>
                </div>
                <div className={`${classes.section} ${classes.even}`}>

                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Education</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <div className={classes.workInfo}>
                                        <h4>B.Eng., Spec. Hons. Software Engineering (Security)</h4>
                                        <label>York University, Toronto, Canada</label>
                                    </div>
                                    <label className={classes.date}>June 2021</label>
                                </div>
                                <p>Key Coursework:</p>
                                <ul>
                                    <li>
                                        Data structures, algorithms, OOP, web development, networking, embedded systems, operating systems, e-commerce,  mission-critical systems,
                                        software engineering (requirements, design, testing), computer security, network security &amp; forensics, cryptography
                                    </li>
                                </ul>
                            </Toggleable>
                        </div>
                    </div>
                </div>
                <div className={`${classes.section} ${classes.projects} ${classes.odd}`}>

                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Projects</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Virtual Reality Showroom</h4>
                                    <label className={classes.date}>2021</label>
                                </div>
                                <p>
                                    My school culminating project; A virtual reality application that showcases tiling in a home setting, with high graphical 
                                    fidelity. <a href={`${PROJECTS_PATH}#${VIRTUAL_SHOWROOM_ID}`}>More info...</a>
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Online Bookstore</h4>
                                    <label className={classes.date}>2021</label>
                                </div>
                                <p>
                                    E-commerce website allowing one to buy books, read/leave reviews and keep an account. <a href={`${PROJECTS_PATH}#${ONLINE_BOOKSTORE_ID}`}>More info...</a>
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Malware Family Research Paper</h4>
                                    <label className={classes.date}>2021</label>
                                </div>
                                <p>
                                    Analysis of two Android malware families focusing on indicators and techniques. <a href={`${PROJECTS_PATH}#${RESEARCH_PAPER_ID}`}>More info...</a> 
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Shopping Website</h4>
                                    <label className={classes.date}>2020</label>
                                </div>
                                <p>
                                    User-centric mock shopping website that features recommendations, accounts, administration and intuitive UI. <a href={`${PROJECTS_PATH}#${SMART_SHOPPER_ID}`}>More info...</a> 
                                </p>
                            </Toggleable>
                        </div>
                    </div>
                </div>
                <div className={`${classes.section} ${classes.skills} ${classes.even}`}>
                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Skills</h3>
                    <div className={classes.sectionContent}>
                        <h4>Proficient</h4>
                        {this.createSkillsHTML(this.state.highSkills, "highSkill")}
                        <h4>Intermediate</h4>
                        {this.createSkillsHTML(this.state.mediumSkills, "mediumSkill")}
                    </div>
                </div>
            </div>
        );
    }

}

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1.5em',

    },
    download: {
        ...theme.buttonStyle,
        textDecoration: 'none',
        margin: 'auto',
    },
    sectionDivider: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '4%',
        border: 0,
        height: '1px', 
        backgroundImage: `linear-gradient(left, ${theme.page.backgroundColor} 5%, ${theme.palette.accent}, ${theme.page.backgroundColor} 95%)`,
    },
    mainDivider: {
        height: '2px',
        marginBottom: 'calc(4% - 1.5em)', 
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        font: theme.mainText.font,

    },
    even: {},
    odd: {
        //backgroundColor: '#FFF4',
        // borderStyle: theme.sectionBox.borderStyle,
        // borderWidth: theme.sectionBox.borderWidth,
        // borderColor: theme.sectionBox.borderColor,
        // borderRadius: theme.sectionBox.borderRadius,
        // boxShadow: theme.sectionBox.boxShadow,
    },
    sectionHeader: {
        
        font: theme.heading.font, 
        margin: 'auto',
        marginBottom: '1em',
    },
    sectionContent: {},
    sectionEntry: {
        '& button' : {
            ...theme.buttonStyle,
            width: '100%',
            textAlign: 'left',
            padding: '0.8em',
            //margin: '1em 0',
            fontSize: '1.2em',
            borderRadius: '5px',
        },
        '& p': {
            margin: '1em 4em',
        },
        '& ul': {
            marginLeft: '4em',
        },
    },
    sectionEntryHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        font: theme.heading.font,
        fontSize: '1.05em',
        //for the SVG icon
        position: 'relative',
        '& h4': {
            minWidth: '100%',
            margin: 0,
        },
        '& label': {
            fontSize: '0.9em',
        },
    },
    workInfo: {
        display: 'flex',
        flexDirection: 'column',
        '& h4': {
            marginBottom: '0.1em',
        }
    },
    date: {
        marginRight: '0.8em',
    },
    projects: {
        '& h4': {
            minWidth: 0,
        },
    },
    skills: {
        '& $sectionContent': {
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '0.5em',
            columnGap: '0.3em',
        },
        '& h4': {
            flexBasis: '100%',
            fontSize: '1.2em',
        },
        '& label': {
            padding: '0.2em 0.6em',
            borderRadius: '20px',
        },
        
    },
    highSkill: {
        backgroundColor: theme.palette.primary,

    },
    mediumSkill: {
        backgroundColor: theme.palette.secondary,
    },
    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)' : {
        date: {
            order: 2,
        },
        sectionHeader: {
            textAlign: 'center',
        }
    },

});

export default withStyles(styles, {injectTheme: true})(Resume);