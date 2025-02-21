import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import './App.css';

/**
 * The main App component that handles routing and authentication state.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <App />
 * )
 *
 * @description
 * This component uses React Router for navigation and manages the authentication state using localStorage.
 * It conditionally renders different components based on the user's authentication status and the current route.
 *
 * @function
 * @name App
 */
function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        navigate('/');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="app-container">
            {location.pathname !== '/login' && <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
                    <Route path="/post/:postId" element={isLoggedIn ? <PostPage /> : <Navigate to="/login" replace />} />
                    <Route path="/login" element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
