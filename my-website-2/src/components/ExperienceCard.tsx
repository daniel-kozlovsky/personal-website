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
            <h2>{role}</h2>
            <p className={styles.info}>
                <span>{location}</span>
                <span> | </span>
                <span>{startDate}</span>
            </p>
            <img className={styles.logo} src={workLogoSrc}/>
        </div>
    );
}

export default ExperienceCard;