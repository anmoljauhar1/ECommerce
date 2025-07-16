import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./Searchbar";
import {UserContext} from '../context/UserContext'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {user, logout} = useContext(UserContext)
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user);
  }, [user]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    logout()
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="hamburger">&#9776;</label>
      <SearchBar />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>

        {/* Dropdown menu fix */}
        <li className="profile-dropdown">
          <div className="dropdown-toggle">Profile</div>
          <div className="dropdown-content">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="logout-btn">{user.name} Logout</button>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
