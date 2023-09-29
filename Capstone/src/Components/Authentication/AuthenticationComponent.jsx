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
    // Simulate a guest login by navigating to a different route or page
    navigate('/product-list'); // Redirect to another route or page, change this to your desired route
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication logic with a fake API
    const fakeApiUrl = 'https://fakestoreapi.com/users';

    fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((users) => {
        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
          // Authentication successful
          setLoginStatus('Login successful');
          // Redirect to another route or page on successful login
          navigate('/product-list'); // Change this to your desired route
        } else {
          // Authentication failed
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