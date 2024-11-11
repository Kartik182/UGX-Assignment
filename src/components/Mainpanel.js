import React from "react";
import "./Mainpanel.css";
import Boxlayout from "./Boxlayout";
import stat1 from "../assets/Stat1.jpg";
import stat2 from "../assets/Stat2.jpg";
import stat3 from "../assets/Stat3.jpg";

function Mainpanel() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="grid-container">
        <div className="fans">
          <Boxlayout fh="fans" fv="27" sh="Power Consumption" sv="270" />
        </div>
        <div className="light">
          <Boxlayout fh="Light" fv="65" sh="PowerConsumption" sv="876" />
        </div>
        <div className="apc">
          <div className="boxlayout2">
            <div className="head">
              <h3>Average power Consumption (kW/H)</h3>
            </div>
            <div>
              <img src={stat1} />
            </div>
          </div>
        </div>
        <div className="ref">
          <Boxlayout fh="Refrigerator" fv="4" sh="PowerConsumption" sv="0" />
        </div>
        <div className="air">
          <Boxlayout fh="AirCondition" fv="852" sh="PowerConsumption" sv="65" />
        </div>
        <div className="pc">
          <div className="boxlayout2">
            <div className="head">
              <h3>Power Consumption</h3>
            </div>
            <div>
              <img src={stat2} />
            </div>
          </div>
        </div>
        <div className="cpc">
          <div className="boxlayout2">
            <div className="head">
              <h3>Current power Consumption (kW/H)</h3>
            </div>
            <div>
              <img src={stat3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpanel;