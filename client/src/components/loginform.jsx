import React, { useState } from 'react';

function loginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-lg mb-2">
        Username:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-full"
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-full"
        />
      </label>
      <button type="submit" className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
        Login
      </button>
    </form>
  );
}

export default loginForm;
