import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    // Add logic to handle registration, like making an API call
    console.log('User registered', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg mt-32">
      <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded mt-1"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded mt-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded mt-1"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border rounded mt-1"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-center mb-4">
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Register</button>
        </div>
      </form>

      <div className="text-center">
      <p className="text-sm">
  Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
</p>
      </div>
    </div>
  );
}

export default Register;
