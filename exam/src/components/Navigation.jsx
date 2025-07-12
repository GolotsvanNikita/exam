import React from 'react';
import './Navigation.css';

export function Navigation()
{
    return(
        <nav className='navContainer'>
            <a href=""><img src="../public/logo.png" alt="logo" className='logo'/></a>
            <div className='inputNav'>
                <div className='combine'>
                    <input type="text" placeholder='Search'/>
                    <button className='search'><img src="../public/search.png" alt="search"/></button>
                </div>
                <button className='mic'><img src="../public/mic.png" alt="mic"/></button>
            </div>
            <div className='buttons'>
                <a href="" className='kvadrat'><img src="../public/kvadrat.svg" alt="kvadrat"/></a>
                <a href="" className='bell'><img src="../public/Bell.svg" alt="ring"/></a>
                <a href="" className='ava'><img src="../public/ava.png" alt="ava"/></a>
            </div>
        </nav>
    );
}