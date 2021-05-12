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
import ChitBtn from "./CheetBtn";

function Sidebar() {
  return (
    <div className="text-lg">
      <div className="my-3 cursor-pointer xl:my-2 md:mx-auto lg2:w-12 lg:w-10 md:w-8">
        <GiSquirrel className=" lg2:h-12 lg2:w-12 lg:h-10 lg:w-10 md:h-8 md:w-8" />
      </div>

      <div className="my-5">
        <SidebarComponent icon={<BiHomeAlt />} text={"Home"} />
      </div>
      <div className="my-5">
        <SidebarComponent icon={<BiHash />} text={"Explore"} />
      </div>
      <div className="my-5">
        <SidebarComponent icon={<BiBell />} text={"Notifications"} />
      </div>
      <div className="my-5">
        <SidebarComponent icon={<BiMessageSquareDetail />} text={"Messages"} />
      </div>
      <div className="my-5">
        <SidebarComponent icon={<BiBookmark />} text={"Bookmarks"} />
      </div>
      <div className="my-5">
        <SidebarComponent icon={<BiUser />} text={"Profile"} />
      </div>

      <div className="my-5 mt-6 ">
        <ChitBtn icon={<GiAcorn />} />
      </div>
    </div>
  );
}

export default Sidebar;
