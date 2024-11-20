import React from 'react';
import BackToTopIcon from '../assets/BackToTopIcon.svg';

function HomeButton () {

    return (
        <input type="image" src={BackToTopIcon} onClick={scrollToTop}></input>
    );
}

function scrollToTop () {

    window.scrollTo(0,0);
}

export default HomeButton;