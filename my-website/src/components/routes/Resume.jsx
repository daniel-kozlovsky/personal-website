import React from 'react';
import {GrDocumentDownload} from 'react-icons/gr';


class Resume extends React.Component {

    render() {
        return (
            <div>
                <h2>Here is my resume</h2>
                <a href="resume.pdf" download="resume.pdf">Download my comprehensive resume here <GrDocumentDownload/></a>
                <hr/>
                <div>
                    <h3>Employment</h3>
                    <div>
                        <h4>Cyber Threat Intelligence Analyst</h4>
                        <h5>BMO Financial Group - Toronto, Canada</h5>
                        <h5>May 2020 - Sept 2020</h5>
                        <ul>
                            <li>Researched current and strategic cyber threats to the company and industry, writing 5-7 formal reports per week</li>
                            <li>Used research, analytical skills and security knowledge to assess cyber threats to the company, with the help of tools like FireEye and Intel471</li>
                            <li>Presented cyber threat reports company-wide, to stakeholders, senior and executive management in both briefing and feature presentation scenarios</li>
                            <li>Contributed hundreds of IoCs per week while working closely with SOC teams to assess vulnerabilities and company exposure</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Resume;