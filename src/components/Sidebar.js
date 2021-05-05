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
      <div className=" bg-yellow-300 ">
        <GiSquirrel className="my-9" />

        <div className="my-9">
          <SidebarComponent icon={<BiHomeAlt />} text={"Home"} />
        </div>
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
