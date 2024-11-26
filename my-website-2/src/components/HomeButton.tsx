import React from 'react';
import BackToTopIcon from '../assets/BackToTopIcon.svg';
import styles from '../styles/HomeButton.module.css';

function HomeButton () {

    return (
        <input className={styles.button} type="image" src={BackToTopIcon} onClick={scrollToTop}></input>
    );
}

function scrollToTop () {

    window.scrollTo(0,0);
}

export default HomeButton;