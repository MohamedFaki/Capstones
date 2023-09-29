import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthenticationComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleGuestLogin = () => {
        navigate('/product-list');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const fakeApiUrl = 'https://fakestoreapi.com/users';

        fetch(fakeApiUrl)
            .then((res) => res.json())
            .then((users) => {
                const user = users.find((user) => user.username === username && user.password === password);

                if (user) {
                    setLoginStatus('Login successful');
                    navigate('/product-list');
                } else {
                    setLoginStatus('Login failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={handleGuestLogin}>Guest Login</button>
            </form>
            <div>
                <p>{loginStatus}</p>
            </div>
        </div>
    );
}

export default AuthenticationComponent;