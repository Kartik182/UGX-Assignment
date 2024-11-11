import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="search-bar"
        />
      </div>
      <div>Icon</div>
      <div className="right-side-nav">
        <div className="in-right-side-nav">
          <p className="status">•</p>
          <p>Johnathan doe▾</p>
        </div>
        <div className="icons">
          <p>🌙</p>
          <p>bell</p>
          <p>setting</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
