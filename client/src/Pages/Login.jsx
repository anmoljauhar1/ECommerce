// src/components/Login.jsx
import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {UserContext} from '../context/UserContext'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // If you want to redirect after login
  const {  login, } = useContext(UserContext);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };
      console.log('Login button clicked');

      const response = await axios.post('http://localhost:5000/auth/login', userData);

      if (response.status === 200 && response.data.user) {
        console.log('✅ Login successful');
        login(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        alert('Login successful!');
        navigate('/'); // Optional: redirect after login
      } else {
        console.error('❌ Login failed: Unexpected response');
        alert('Login failed!');
      }

    } catch (err) {
      console.error('❌ Login error:', err);
      alert('Login failed: Invalid email or password');
    }
  }; // ✅ You were missing this closing brace

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
};

export default Login;
