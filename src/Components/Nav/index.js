import React from 'react';
import './Nav.css'

function Nav() {

    return(
        <header>
            <h1>Justin Ng's Portfolio Page</h1>
        <nav>
            <ul>
                <li>
                <a href='/about'>About</a>
                </li>
                <li>
                <a href='/project'>Projects</a>
                </li>
                <li>
                <a href='/contact'>Contact</a>
                </li>
                <li>
                <a href='/resume'>Resume</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Nav;