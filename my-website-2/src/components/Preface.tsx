import React from 'react';
import styles from '../styles/Preface.module.css';

function Preface () {

    return (
        <div>
            <p className={styles.test}>Daniel Kozlovsky</p>
            <p>Software Security Engineer</p>
            <p>I like security</p>
        </div>
    );
}

export default Preface;