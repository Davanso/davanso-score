import React from 'react';
import { FaUser, FaBell, FaCog } from 'react-icons/fa'; // Import icons
import './header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">DAVANSO SCORE</h1>
            <div className="icons">
                <FaBell className="icon" />
                <FaCog className="icon" />
                <FaUser className="icon" />
            </div>
        </header>
    );
};

export default Header;