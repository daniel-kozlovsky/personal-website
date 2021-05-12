import React from 'react';


class Resume extends React.Component {

    render() {
        return (
            <div>
                <h2>Here is my resume</h2>
                <a href="resume.pdf" download="resume.pdf">dl</a>
                <hr/>
                <p>Resume...</p>
            </div>
        );
    }

}

export default Resume;