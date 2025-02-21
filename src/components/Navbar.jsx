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
