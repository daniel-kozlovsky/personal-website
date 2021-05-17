import React from 'react';
import {GrDocumentDownload} from 'react-icons/gr';
import withStyles from 'react-jss';
import Toggleable from '../Toggleable'

class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fluentSkills: ['Java', 'J2EE' ,'JUnit', 'JPA', 'JDBC', 'JSP', 'Servlets', 'Maven', 'C#', 'Git'],
            familiarSkills: ['C/C++', 'Unix', 'HTML','CSS', 'JavaScript', 'React.js', 'Vue.js', 'SQL', 'PHP',
             'PowerShell', 'Kali Linux', 'Docker', 'Firebase', 'IBM Cloud', 'Unity', 'SteamVR' ],
        };
        this.createSkillsHTML = this.createSkillsHTML.bind(this);
    }

    createSkillsHTML(skillsArray, className) {
        const {classes} = this.props;
        let elements = [];
        skillsArray.forEach((element) => {
            if(className === "fluentSkill")
            {
                elements.push(<label className={classes.fluentSkill}>{element}</label>);
            }
            else if(className === "familiarSkill")
            {
                elements.push(<label className={classes.familiarSkill}>{element}</label>);
            }
            
        });
        return elements;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <a className={classes.download} href="resume.pdf" download="Daniel_Kozlovsky_Resume.pdf"><GrDocumentDownload/> Download my comprehensive resume</a>
                <div className={classes.section}>
                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Employment</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Cyber Threat Intelligence Analyst</h4>
                                    <label>BMO Financial Group - Toronto, Canada</label>
                                    <label>May 2020 - Sept 2020</label>
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
                                    <h4>Software Developer</h4>
                                    <label>BMO Financial Group - Toronto, Canada</label>
                                    <label>Mar 2019 – Sept 2019</label>
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
                                    <h4>Quality Assurance Analyst</h4>
                                    <label>BMO Financial Group - Toronto, Canada</label>
                                    <label>Sept 2018 – Mar 2019</label>
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
                <div className={classes.section}>
                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Education</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>B.Eng., Spec. Hons. Software Engineering (Security)</h4>
                                    <label>York University, Toronto, Canada</label>
                                    <label>June 2021</label>
                                </div>
                                <label>Key Coursework:</label>
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
                <div className={classes.section}>
                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Projects</h3>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Virtual Reality Showroom</h4>
                                    <label>2021</label>
                                </div>
                                <p>
                                    My school culminating project; A virtual reality application that showcases tiling in a home setting, with high graphical fidelity.
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Online Bookstore</h4>
                                    <label>2021</label>
                                </div>
                                <p>
                                    E-commerce website allowing one to buy books, read/leave reviews and keep an account.
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Malware Family Research Paper</h4>
                                    <label>2021</label>
                                </div>
                                <p>
                                    Analysis of two Android malware families focusing on indicators and techniques. 
                                </p>
                            </Toggleable>
                        </div>
                        <div className={classes.sectionEntry}>
                            <Toggleable isVisible={false}>
                                <div className={classes.sectionEntryHeader}>
                                    <h4>Shopping Website</h4>
                                    <label>2020</label>
                                </div>
                                <p>
                                    User-centric mock shopping website that features recommendations, accounts, administration and intuitive UI. 
                                </p>
                            </Toggleable>
                        </div>
                    </div>
                </div>
                <div className={classes.section}>
                    <hr className={classes.sectionDivider}/>
                    <h3 className={classes.sectionHeader}>Skills</h3>
                    <div className={classes.sectionContent}>
                        <h4>Fluent</h4>
                        {this.createSkillsHTML(this.state.fluentSkills, "fluentSkill")}
                        <h4>Familiar</h4>
                        {this.createSkillsHTML(this.state.familiarSkills, "familiarSkill")}
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

    },
    download: {
        textAlign: 'center',
    },
    sectionDivider: {
        marginLeft: 0,
        marginRight: 0,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
    },
    sectionHeader: {
        textAlign: 'center',
    },
    sectionContent: {},
    sectionEntry: {
        '& button' : {
            width: '100%',
            borderStyle: 'none',
            textAlign: 'left',
        },
    },
    sectionEntryHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& h4': {
            minWidth: '100%',
        }
    },
    fluentSkill: {
    
    },
    familiarSkill: {
    
    },

});

export default withStyles(styles, {injectTheme: true})(Resume);