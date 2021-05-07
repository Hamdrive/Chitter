import React from 'react'
import { IconContext } from "react-icons";

function ChitBtn({icon}) {
    return (
      <div className="flex flex-row">
        <div className=" py-2 px-4 flex justify-center flex-row bg-red-500 rounded-full cursor-pointer hover:bg-red-600 duration-200 md:mx-auto xl:w-48 xl:h-12 lg:w-16 lg:h-16">
          <IconContext.Provider value={{ size: "2rem" }}>
            <h1 className="h-8 w-8 mx-2 md:my-auto xl:hidden">{icon}</h1>
          </IconContext.Provider>
          <h1 className="mx-2 text-xl font-bold md:hidden xl:contents">Chit</h1>
        </div>
      </div>
    );
}

export default ChitBtn
