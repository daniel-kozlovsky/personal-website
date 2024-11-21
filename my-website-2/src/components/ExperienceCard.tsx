import React from 'react';

type Props = {
    startDate: string;
    role: string;
    location: string;
};

function ExperienceCard ({startDate, role, location} : Props) {

    return (
        <div>
            <p>{startDate}</p>
            <p>{role}</p>
            <p>{location}</p>
        </div>
    );
}

export default ExperienceCard;