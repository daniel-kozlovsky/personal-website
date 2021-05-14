import React from 'react';
import withStyles from 'react-jss';

class Projects extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <video className={classes.media} alt="pr1">
                    Hmm it seems your browser doesn't support Video
                </video>
                <div className={classes.description}>
                    <h3>Virtual Showroom</h3>
                    <p>
                        As my capstone school project my team and I set out to solve real world problems through software engineering through a VR showroom application. 
                        We had the chance to work with Kablan Developments Inc. to showcase their tiles in a realistic and convenient way, to save the time and effort of 
                        physically browsing their myriad of tile designs and styles. With so many tile designs, it’s impossible to hold them all in a showroom, and is even 
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
                        helping me improve me design and planning skills. As leader I learned to guide the team and make executive decisions, consequently being accountable for deliverables 
                        and results. It really made me feel like an owner of the application that I could indeed be proud of!
                    </p>
                </div>
                <img className={classes.media} alt="pr2"/>
                <div className={classes.description}>
                    <h3>Shopping Website</h3>
                    <p>This project was a Shopping Website</p>
                </div>
                <img className={classes.media} alt="pr3"/>
                <div className={classes.description}>
                    <h3>Online Bookstore</h3>
                    <p>this was an online bookstore project</p>
                </div>
                <img className={classes.media} alt="pr4"/>
                <div className={classes.description}>
                    <h3>Malware Family Research Paper</h3>
                    <p>This project was a Malware Family Research Paper...</p>
                </div>
            </div>
        );
    }

}

const styles = (theme) => ({
    media: {},
    description: {},
});

export default withStyles(styles, {injectTheme: true})(Projects);