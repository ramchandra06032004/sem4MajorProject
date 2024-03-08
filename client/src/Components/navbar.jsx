import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/FeelFree.Org-removebg-preview (1).png";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navBtn">
        <Link to="/login" className="landing-login-button">
          Login
        </Link>
        <Link to="/register" className="landing-register-button">
          Register
        </Link>
      </div>
    </div>
  );
};

export default navbar;
