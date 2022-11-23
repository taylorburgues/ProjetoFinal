import './Header.css';
import React from 'react';

export default function(props) {
    return(
        <header className='header'>
            <h2>{props.title}</h2>
        </header>
    )
}