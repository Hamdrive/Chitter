import React from "react";
import { IconContext } from "react-icons";

function SidebarComponent({ icon, text }) {
  return (
    <div className="flex flex-row ">
      <div className="py-2 px-1.5 flex flex-row bg-green-500 rounded-full bg-opacity-0 cursor-pointer hover:bg-opacity-50 duration-100 xl:ml-0 xl:mr-2 md:mx-auto">
        <IconContext.Provider value={{ size: "2rem" }}>
          <h1 className="h-8 w-8 mx-1">{icon}</h1>
        </IconContext.Provider>
        <div className="md:hidden xl:contents">
          <h1 className="mx-1 text-xl font-bold">{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
