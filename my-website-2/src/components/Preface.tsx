import React from 'react';
import styles from '../styles/Preface.module.css';

function Preface () {

    return (
        <div className={styles.preface}>
            <h1 className={styles.name}>Daniel Kozlovsky</h1>
            <h3 className={styles.title}>Software Security Engineer</h3>
            <p className={styles.tagLine}>I like cybersecurity</p>
        </div>
    );
}

export default Preface;