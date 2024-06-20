import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/store" className="nav-link">
          Store Anime
        </Link>
        <Link to="/view" className="nav-link">
          View Anime
        </Link>
        <Link to="/wishlist">Wishlist My Watchlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
