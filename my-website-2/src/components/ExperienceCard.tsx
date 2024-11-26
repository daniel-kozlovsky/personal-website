import React from 'react';
import styles from '../styles/ExperiencCard.module.css';

type Props = {
    startDate: string;
    role: string;
    location: string;
    workLogoSrc: string;
};

function ExperienceCard ({startDate, role, location, workLogoSrc} : Props) {

    return (
        <div className={styles.card}>
            <p>{startDate}</p>
            <p>{role}</p>
            <p>{location}</p>
            <img className={styles.logo} src={workLogoSrc}/>
        </div>
    );
}

export default ExperienceCard;