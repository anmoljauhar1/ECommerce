// src/components/Signup.jsx
import React, { useState, useContext } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {UserContext} from '../context/UserContext'
const Signup = () => {

  const { login } = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/signup', { ...userData });
      if (response.status === 201) {
        alert("The user has been created");
        
        localStorage.setItem("userData", JSON.stringify(userData));
        login(response.data.user)
        localStorage.setItem("isLoggedIn", true);
        navigate("/home");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
