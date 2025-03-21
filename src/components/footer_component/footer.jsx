import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <h1 className="title">DAVANSO SCORE</h1>
                <div className="links">
                    <a href="/" className="link">Home</a>
                    <a href="/about" className="link">About</a>
                    <a href="/contact" className="link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;