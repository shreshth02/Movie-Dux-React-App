import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt="movieDux" />
            <h2 className='app-subtitle'>Its Nachos Time! Find your next movie here.</h2>
        </div>
    );
}