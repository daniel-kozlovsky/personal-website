import * as React from 'react';
import headshot from '../assets/headshot.png';
import styles from '../styles/Portrait.module.css';

function Portrait () {
    return( 
        <div className={styles.imgContainer}>
            <img className={styles.portrait} src={headshot}></img>
        </div>
        
    );
}

export default Portrait;