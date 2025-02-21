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
