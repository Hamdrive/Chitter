import React from 'react'
import { GiSquirrel, GiPaperPlane } from "react-icons/gi";
import {} from "react-icons/fa"
import SidebarComponent from './SidebarComponent';
import {
  BiHomeAlt,
  BiHash,
  BiBell,
  BiMessageSquareDetail,
  BiBookmark,
  BiUser,
} from "react-icons/bi";
import ChitBtn from './ChitBtn';

function Sidebar() {
    return (
      <div>
        <GiSquirrel />

        <SidebarComponent icon={<BiHomeAlt />} text={"Home"} />
        <SidebarComponent icon={<BiHash />} text={"Explore"} />
        <SidebarComponent icon={<BiBell />} text={"Notifications"} />
        <SidebarComponent icon={<BiMessageSquareDetail />} text={"Messages"} />
        <SidebarComponent icon={<BiBookmark />} text={"Bookmarks"} />
        <SidebarComponent icon={<BiUser />} text={"Profile"} />

        <ChitBtn icon={<GiPaperPlane />} />
      </div>
    );
}

export default Sidebar
