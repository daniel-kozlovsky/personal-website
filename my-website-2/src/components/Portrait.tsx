import '../styles/Portrait.css';
import * as React from 'react';
import headshot from '../assets/headshot.png';

function Portrait () {
    return( 
        <img src={headshot}></img>
    );
}

export default Portrait;