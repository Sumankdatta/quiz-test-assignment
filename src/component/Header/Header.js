import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <Link to='/'><p className='title'>quizeCrack</p></Link>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/analytic'>Analytic</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='about'>About</Link>
            </div>
        </div>
    );
};

export default Header;