import React from "react";
import { GiSquirrel, GiAcorn } from "react-icons/gi";
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
    <div className=" bg-yellow-300 text-lg">
      <div className="my-3 cursor-pointer xl:ml-1 lg:ml-32 lg:w-20 md:ml-2 md:w-20">
        <GiSquirrel className=" h-8 w-8 mx-6" />
      </div>

      <div className="my-2">
        <SidebarComponent icon={<BiHomeAlt />} text={"Home"} />
      </div>
      <div className="my-2">
        <SidebarComponent icon={<BiHash />} text={"Explore"} />
      </div>
      <div className="my-2">
        <SidebarComponent icon={<BiBell />} text={"Notifications"} />
      </div>
      <div className="my-2">
        <SidebarComponent icon={<BiMessageSquareDetail />} text={"Messages"} />
      </div>
      <div className="my-2">
        <SidebarComponent icon={<BiBookmark />} text={"Bookmarks"} />
      </div>
      <div className="my-2">
        <SidebarComponent icon={<BiUser />} text={"Profile"} />
      </div>

      <div className="my-2">
        <ChitBtn icon={<GiAcorn />} />
      </div>
    </div>
  );
}

export default Sidebar;
