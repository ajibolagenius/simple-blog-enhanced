/**
 * A React component that renders a login form with username and password inputs.
 *
 * When the form is submitted, it checks if the username is 'test' and the password is 'password'.
 * If the credentials are valid, it calls the `onLogin` callback function with the username.
 * If the credentials are invalid, it displays an error message.
 *
 * @param {object} props - The component props.
 * @param {function} props.onLogin - A callback function to be called when the user logs in successfully.
 * @returns {JSX.Element} The login form component.
 */

import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'test' && password === 'password') {
            onLogin(username);
        } else {
            setError('Invalid username or password');
        }
        setUsername('');
        setPassword('');
    }

    return (
        <div className="">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
