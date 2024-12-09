import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ShoppingCart } from "phosphor-react";
import { AuthContext } from "../context/AuthContext";
import "./navbar.css"; // Adjust path as necessary
import logo from "../images/HoA/logo.png";

function Navbar() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="House of Athletes Logo" className="navbar-logo-image" />
          HoA
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          <IoMenu />
        </div>

        {/* Navigation Menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/card" className="nav-links" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <ShoppingCart size={32} />
            </Link>
          </li>

          {!isLoggedIn ? (
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <div className="nav-links" onClick={handleLogout}>
                Logout
              </div>
            </li>
          )}
        </ul>

        {isLoggedIn && (
          <div className="welcome-message">
            Welcome, <span className="username">{username}</span>!
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
