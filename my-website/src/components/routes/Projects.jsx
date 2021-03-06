import React from 'react';
import withStyles from 'react-jss';

import virtualShowroomVideo from '../../media/video/Virtual_Showroom_Showcase.mp4';
import smartShopperImage from '../../media/img/smart_shopper_thumbnail.png';
import researchPaperImage from '../../media/img/malware_paper_thumbnail.png';
import onlineBSImage from '../../media/img/online_bs_thumbnail.png';
import videoPoster from '../../media/img/VS_poster.png';
import malwarePaper from '../../media/content/clustering_android_malware_web.pdf';
import FadeOverlayLink from '../FadeOverlayLink';
import {FiExternalLink} from 'react-icons/fi';
import {GrDocumentDownload} from 'react-icons/gr';

import {VIRTUAL_SHOWROOM_ID, RESEARCH_PAPER_ID, SMART_SHOPPER_ID, ONLINE_BOOKSTORE_ID,
    SS_HREF, KABLAN_HREF, PAPER_NAME} from '../../utility.js';



/**
 * Projects page showcasing some projects with media and description
 */
class Projects extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div id={VIRTUAL_SHOWROOM_ID} className={`${classes.row} ${classes.odd} ${classes.first}`}>
                    <h3>Virtual Showroom</h3>
                    <div className={classes.mediaContainer}>
                        <video className={classes.media} controls preload="metadata" poster={videoPoster}>
                            <source src={virtualShowroomVideo} type='video/mp4'/>
                            Your browser doesn't support video
                        </video>
                    </div>
                    <div className={classes.description}>
                        <p>
                            As my capstone school project my team and I set out to solve real world problems through software engineering through a VR showroom application. 
                            We had the chance to work with <a href={KABLAN_HREF} rel="noreferrer noopener" target="_blank">Kablan Developments Inc.</a> to showcase their tiles in a realistic and convenient way, to save the time and effort of 
                            physically browsing their myriad of tile designs and styles. With so many tile designs, it???s impossible to hold them all in a showroom, and is even 
                            more tedious to transport them to construction sites showcase.
                        </p>
                        <p>
                            To achieve this objective, we developed a virtual reality application through the Unity game engine that places the player in a home setting and allows 
                            them to switch out wall and floor textures with tiles for comparison. To map controls, camera and interactions reliably, we used SteamVR. Then, graphical 
                            fidelity was a key objective for us and prompted use of 4K textures and comprehensive post-processing. In addition, our team wanted Kablan to be able to 
                            manage their own tile textures, since new tiles be created or removed from their lineup. To do this, we used substance alchemist in a standalone application 
                            that processes textures to make them fit the showroom post effects. 
                        </p>
                        <p>
                            While this project taught me Unity and graphical programming, the real value of the experience came from the process. I took the role of team leader and project 
                            manager which entailed work planning, task management, and client interfacing. I became really comfortable with the SDLC and the key documentation for each phase, 
                            helping me improve my design and planning skills. As leader I learned to guide the team and make executive decisions, consequently being accountable for deliverables 
                            and results. It really made me feel like an owner of the application that I could indeed be proud of!
                        </p>
                    </div>
                </div>
                <div id={RESEARCH_PAPER_ID} className={`${classes.row} ${classes.even}`}>
                    <h3>Clustering Android Malware</h3>
                    <div className={classes.mediaContainer}>
                        <FadeOverlayLink href={malwarePaper} target="_blank" download={PAPER_NAME} linkText={<>Download My Paper <GrDocumentDownload/></>}>
                            <img src={researchPaperImage} className={classes.media} alt="Research Paper Cover"/>
                        </FadeOverlayLink>
                    </div>
                    <div className={classes.description}>
                        
                        <p>
                            I???ve always been deeply interested in the software aspect of computer security, like the code behind malware and exploits, or the root cause of vulnerabilities.
                            Consequently, one of my favourite parts of computer security is analysing malicious or vulnerable code and I got to do exactly this for a research paper. 
                            I chose to research binaries from a specific Android malware family ??? DroidKungFu ??? and analyze patterns and IoCs that could help categorize or automatically 
                            identify a binary as part of the family. 
                        </p>
                        <p>
                            In order to analyze the binaries, I used a Kali Linux VM as a sandbox and various tools to facilitate the research. Tools like jadx and dex2jar helped me 
                            decompile the binaries for analysis in an IDE. Looking at all of my binaries in the dataset I was able to discern a few patterns as outlined in my paper. 
                        </p>
                        <p>
                            Feel free to <a href={malwarePaper} download={PAPER_NAME} rel="noreferrer noopener" target="_blank">download my paper</a> co-authored with Gagenpreet Benipal, if you???re interested in malware analysis!
                        </p>  
                    </div>
                </div>
                <div id={SMART_SHOPPER_ID} className={`${classes.row} ${classes.odd}`}>
                    <h3>The Smart Shopper</h3>
                    <div className={classes.mediaContainer}>
                        <FadeOverlayLink href={SS_HREF} rel="noreferrer noopener" target="_blank" linkText={<>Check out the website <FiExternalLink/></>}>
                            <img className={classes.media} src={smartShopperImage} alt="Smart Shopper Cover"/>
                        </FadeOverlayLink>
                    </div>
                    <div className={classes.description}>
                        
                        <p>
                            One of my first full web development experiences, <a href={SS_HREF} rel="noreferrer noopener" target="_blank">The Smart Shopper</a>, is a shopping website for a mock company. It was done as part of a school 
                            project to build an application from requirements and required iterating and interfacing with our client. The website features accounts and roles, cart 
                            management, product recommendations, product management, and shows the optimum route for shopping at a certain location. Working with a team to build this, my 
                            role focused on the frontend and I was responsible for accounts and roles, user authentication, and product management. 
                        </p>
                        <p>
                            This was my first experience with creating a great user experience and to do so, I used Node, Vue.js, Vuex and Vuetify to build the interface. In addition, 
                            the application integrates AWS Cognito and is deployed on an EC2 server. Apart from becoming comfortable with JavaScript and web development, I also learned 
                            key collaboration process skills. As a team, we had daily scrums to discuss our progress and tracked issues and tasks in our Github. The result is a complete, 
                            user-centric web application that follows requirements and landed me an A!
                        </p>
                    </div>
                </div>
                <div id={ONLINE_BOOKSTORE_ID} className={`${classes.row} ${classes.even}`}>
                    <h3>Online Bookstore</h3>
                    <div className={classes.mediaContainer}>
                        <img src={onlineBSImage} className={classes.media} alt="Online Bookstore Cover"/>
                    </div>
                    <div className={classes.description}>
                        
                        <p>
                            Online Bookstore is an e-commerce application, part of a course project, and allows users to view books; read and write book reviews; 
                            and manage the users??? cart, account and orders. This project was done in a team where I took lead and was also responsible for the design documentation, 
                            application security and features like user authentication, account creation, and cart management. 
                        </p>
                        <p>    
                            Our website was written purely in the J2EE environment without any frontend frameworks so we could focus on learning fundamentals like Servlets, HTML and 
                            AJAX as well as design patterns. As a result, I became comfortable with technologies like Servlets, JDBC, JSP, Apache2, SQL and Maven. With the java 
                            framework, I was able to build a true MVC application that increased collaboration, enabled AJAX capability, and practiced separation of concerns. 
                        </p>
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
        rowGap: '3em',
        font: theme.mainText.font,
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '2em',
        padding: '0.8em',
        alignItems: 'center',
        '& h3': {
            flexBasis: '65%',
            textAlign: 'center',
            font: theme.heading.font,
        },
    },
    odd: {
        ...theme.sectionBox,
        justifyContent: 'flex-end',
    },
    even: {
        '& $mediaContainer': {
            order: 2,
        },
    },
    mediaContainer: {
        flexBasis: '35%',
        //for the overlays (positioned ancestor)
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        flexGrow: '1',
    },
    media: {
        display: 'block',
        width: 'auto',
        maxWidth: '100%',
    },
    description: {
        flexBasis: 'calc(65% - 2em)',
        flexGrow: 2,
    },
    first: {
        flexDirection: 'column',
        '& $mediaContainer': {
            borderRadius: 'none',
            maxWidth: '95%',
            marginBottom: '2em',
            width: '100%',
            position: 'relative',
            paddingBottom: '56.25%',
        },
        '& video' :
        {
            height: '100%',
            width: '100%',
            position: 'absolute',
            borderRadius: '10px',
            objectFit: 'fill',
            top: 0, 
            left: 0,
            right: 0,
            bottom: 0,
        }
    },
    //Smaller screens, like tablet and mobile
    '@media(max-width: 1024px)': {
        mediaContainer: {
            minWidth: '90%',
            margin: '1em 0.5em',
        },
        row: {
            justifyContent: 'center',
        },
        even: {
            '& $mediaContainer': {
                order: 0,
            },
        },
    },
    //For EdgeHTML
    '@supports (-ms-ime-align:auto)': {
        row: {
            flex: '0 0 auto',
            '& h3': {
                flex: '0 1 65%',
            },
        },
        mediaContainer: {
            flex: '1 1 35%',
            margin: '0 1em',
        },
        description: {
            flexGrow: '2',
            flexShrink: '1',
            flexBasis: 'calc(65% - 2em)',
        },
        first: {
            '& h3': {
                flex: '0 1 auto',
            },
            '& $mediaContainer': {
                flex: '0 0 auto',
            },
            '& $description': {
                flex: '1 1 auto',
                maxWidth: '100%',
            },
        },
    },
    //for IE 10+
    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
        row: {
            flex: '0 0 auto',
            '& h3': {
                flex: '0 1 65%',
            },
        },
        mediaContainer: {
            flex: '1 1 35%',
            margin: '0 1em',
        },
        description: {
            flexGrow: '2',
            flexShrink: '1',
            flexBasis: 'calc(65% - 2em)',
        },
        first: {
            '& h3': {
                flex: '0 1 auto',
            },
            '& $mediaContainer': {
                flex: '0 0 auto',
            },
            '& $description': {
                flex: '1 1 auto',
                maxWidth: '100%',
            },
        },
        
    },
});

export default withStyles(styles, {injectTheme: true})(Projects);