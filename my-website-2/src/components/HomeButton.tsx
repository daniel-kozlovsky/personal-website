import React from 'react';
import {ReactComponent as BackToTopIcon} from '../assets/BackToTopIcon.svg';
import styles from '../styles/HomeButton.module.css';

function HomeButton () {

    return (
        <a className={styles.button} type="image" onClick={scrollToTop}>
            <BackToTopIcon />
        </a>
    );
}

function scrollToTop () {

    window.scrollTo({top: 0, behavior: "smooth"});
}

export default HomeButton;