import React from "react";
import "./Sidepanel.css";
import { TfiDashboard } from "react-icons/tfi";
import { LuLayout } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { BiFileBlank } from "react-icons/bi";
import { VscListFlat } from "react-icons/vsc";
import { FaChartLine } from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

function Sidepanel() {
  return (
    <div className="sidepanel">
      <h1 className="main-heading">Power Analytics</h1>
      <div className="sidepanel-links">
        <p>
          <TfiDashboard /> &nbsp; Dashboard
        </p>
        <p>
          <LuLayout /> &nbsp; Layouts
        </p>
        <p>
          <MdOutlineMail /> &nbsp; Mailbox
        </p>
        <p>
          <MdOutlineCalendarMonth /> &nbsp; Calendar
        </p>
        <p>
          <MdOutlineBuild /> &nbsp; UI Demands
        </p>
        <p>
          <SiGoogleforms /> &nbsp; Forms
        </p>
        <p>
          <BiFileBlank /> &nbsp; Pages
        </p>
        <p>
          <VscListFlat /> &nbsp; Toolbox
        </p>
        <p>
          <FaChartLine /> &nbsp; Charts
        </p>
        <p>
          <TbMapSearch /> &nbsp; Maps
        </p>
        <p>
          <CgProfile /> &nbsp; Profile
        </p>
      </div>
    </div>
  );
}

export default Sidepanel;
}

export default Sidepanel
