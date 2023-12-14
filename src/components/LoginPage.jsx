// src/components/LoginPage.jsx
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password });
    // You can add authentication logic or make an API call here
  };

  return (
    <div className="min-h-fit flex items-center justify-center">
      <div className="bg-purple-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-left block text-sm font-medium text-white">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-left block text-sm font-medium text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-white text-purple-700 p-2 rounded-md w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
