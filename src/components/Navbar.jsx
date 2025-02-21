/**
 * Renders the navigation bar component for the blog application.
 *
 * The Navbar component provides links to the home page, as well as buttons to navigate back and forward through the application's history. If the user is logged in, a logout button is also displayed.
 *
 * @param {boolean} isLoggedIn - Indicates whether the user is currently logged in.
 * @param {function} handleLogout - Function to be called when the user clicks the logout button.
 * @returns {JSX.Element} - The rendered Navbar component.
 */

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1);
    };

    const handleNext = () => {
        navigate(1);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">📑 Simple Enhanced Blog</h1>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <button className="navbar-button" onClick={handleBack}>Back</button>
                <button className="navbar-button" onClick={handleNext}>Next</button>
                {isLoggedIn && <button className="navbar-button" onClick={handleLogout}>Logout</button>}
            </div>
        </nav>
    );
};

export default Navbar;
