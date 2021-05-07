import React from "react";
import { IconContext } from "react-icons";

function SidebarComponent({ icon, text }) {
  return (
    <div className="flex flex-row ">
      <div className="py-2 px-4 flex flex-row bg-red-500 rounded-full bg-opacity-0 cursor-pointer hover:bg-opacity-50 duration-100 xl:ml-1 lg:ml-32 md:ml-2">
        <IconContext.Provider value={{ size: "2rem" }}>
          <h1 className="h-8 w-8 mx-2">{icon}</h1>
        </IconContext.Provider>
        <h1 className="mx-2 text-xl font-bold hidden xl:contents">{text}</h1>
      </div>
    </div>
  );
}

export default SidebarComponent;
