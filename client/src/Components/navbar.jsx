import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/FeelFree.Org-removebg-preview (1).png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace this with your actual check for whether the user is logged in
    const loggedIn = localStorage.getItem("auth") ? true : false;
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navBtn">
        {isLoggedIn ? (
          <Link to="/logout" className="logout-button">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" className="landing-login-button">
              Login
            </Link>
            <Link to="/register" className="landing-register-button">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
