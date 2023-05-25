import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
            <Link to="/">Shop</Link>
            <Link to="/Orders">Order</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;