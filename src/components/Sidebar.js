import React from "react";
import { GiSquirrel, GiPaperPlane } from "react-icons/gi";
import {} from "react-icons/fa";
import SidebarComponent from "./SidebarComponent";
import {
  BiHomeAlt,
  BiHash,
  BiBell,
  BiMessageSquareDetail,
  BiBookmark,
  BiUser,
} from "react-icons/bi";
import ChitBtn from "./ChitBtn";

function Sidebar() {
  return (
    <div className=" bg-yellow-300 border-r-2 border-gray-500 text-lg ml-16">
      <GiSquirrel className="my-9 h-8 w-8 mx-6" />

      <div className="my-9">
        <SidebarComponent icon={<BiHomeAlt /> } text={"Home"} />
      </div>
      <div className="my-9">
        <SidebarComponent icon={<BiHash />} text={"Explore"} />
      </div>
      <div className="my-9">
        <SidebarComponent icon={<BiBell />} text={"Notifications"} />
      </div>
      <div className="my-9">
        <SidebarComponent icon={<BiMessageSquareDetail />} text={"Messages"} />
      </div>
      <div className="my-9">
        <SidebarComponent icon={<BiBookmark />} text={"Bookmarks"} />
      </div>
      <div className="my-9">
        <SidebarComponent icon={<BiUser />} text={"Profile"} />
      </div>

      <div className="my-9">
        <ChitBtn icon={<GiPaperPlane />} />
      </div>
    </div>
  );
}

export default Sidebar;
