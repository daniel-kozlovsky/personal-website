import React from 'react';
import {ReactComponent as EmailIcon} from '../assets/EmailIcon.svg';
import styles from '../styles/ContactButtons.module.css';

const EMAIL_BYTES: number[] = [100, 97, 110, 105, 101, 108, 46, 107, 111, 122, 108, 111, 118, 115, 107, 121, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];

function EmailButton () {

    return (
        <a className={styles.button} type="image" onClick={copyEmailToClipBoard}>
            <EmailIcon />
        </a>
    );
}

async function copyEmailToClipBoard()
{
    await navigator.clipboard.writeText(String.fromCharCode(...EMAIL_BYTES));
}

export default EmailButton;