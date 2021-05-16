import React from "react";
import { Link } from "react-router-dom";
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
      <div className=" bg-green-500 rounded-full bg-opacity-0 hover:bg-opacity-50 duration-100 cursor-pointer mt-1 py-2 px-2 md:mx-auto lg2:w-16 lg:w-10 md:w-8">
        <GiSquirrel className=" lg2:h-12 lg2:w-12 lg:h-10 lg:w-10 md:h-8 md:w-8" />
      </div>
      <Link to="/home">
        <div className="my-5">
          <SidebarComponent icon={<BiHomeAlt />} text={"Home"} />
        </div>
      </Link>
      <Link to="/explore">
        <div className="my-5">
          <SidebarComponent icon={<BiHash />} text={"Explore"} />
        </div>
      </Link>
      <Link to="/notifications">
        <div className="my-5">
          <SidebarComponent icon={<BiBell />} text={"Notifications"} />
        </div>
      </Link>
      <Link to="/messages">
        <div className="my-5">
          <SidebarComponent
            icon={<BiMessageSquareDetail />}
            text={"Messages"}
          />
        </div>
      </Link>
      <Link to="/bookmarks">
        <div className="my-5">
          <SidebarComponent icon={<BiBookmark />} text={"Bookmarks"} />
        </div>
      </Link>
      <Link to="/userprofile">
        <div className="my-5">
          <SidebarComponent icon={<BiUser />} text={"Profile"} />
        </div>
      </Link>

      <div className="my-5 mt-6 ">
        <ChitBtn icon={<GiAcorn />} />
      </div>
    </div>
  );
}

export default Sidebar;
