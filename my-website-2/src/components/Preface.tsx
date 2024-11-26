import React from 'react';
import styles from '../styles/Preface.module.css';

function Preface () {

    return (
        <div className={styles.preface}>
            <p className={styles.name}>Daniel Kozlovsky</p>
            <p className={styles.title}>Software Security Engineer</p>
            <p className={styles.tagLine}>I like security</p>
        </div>
    );
}

export default Preface;