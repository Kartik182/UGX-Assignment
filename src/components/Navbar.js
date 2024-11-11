import React from "react";
import "./Navbar.css";
import {FaRegMoon} from "react-icons/fa";
import {FaRegBell} from "react-icons/fa6";
import {IoSettingsOutline} from "react-icons/io5";
import {FaList} from "react-icons/fa6";



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
      <div><FaList/></div>
      <div className="right-side-nav">
        <div className="in-right-side-nav">
          <p className="status">•</p>
          <p>Johnathan doe▾</p>
        </div>
        <div className="icons">
          <p><FaRegMoon /></p>
          <p><FaRegBell /></p>
          <p><IoSettingsOutline /></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
