import React from 'react';
import { Link } from 'react-router-dom';

import './nav.styles.scss'

const Nav = () => (
    <div className="header">
        <div className="siteActions">
            <Link to='/' className='option logo'>Reno</Link>
            <Link to='/services' className='option logo'>Services</Link>
            <Link to='/tools' className='option logo'>Tools</Link>

        </div>
        <div className="userOptions">
            <Link to='/signup' className="option">Sign Up</Link>
            <div className="option">Sign Out</div>
        </div>
    </div>
)

export default Nav