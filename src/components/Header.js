import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css"; // or a Header.css if you prefer

function Header() {
  return (
    <header className="header">
      <div className="header-left">
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
        </ul>
      </nav>
    </header>
  );
}

export default Header;
