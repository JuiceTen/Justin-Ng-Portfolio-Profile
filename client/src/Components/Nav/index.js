import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {

    return(
        <div>
            <h1><Link to='/'>Justin Ng's Portfolio Page</Link></h1>
        <nav>
            <ul>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/project'>Projects</Link>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
                <li>
                <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;