import React from 'react'
import { IconContext } from "react-icons";

function ChitBtn({icon}) {
    return (
      <div className="flex flex-row mt-6">
        <div className=" py-2 px-4 flex justify-center flex-row bg-red-500 rounded-full cursor-pointer hover:bg-red-600 duration-200 mx-auto xl:ml-1 xl:w-56 lg:ml-32 lg:w-20">
          <IconContext.Provider value={{ size: "2rem" }}>
            <h1 className="h-8 w-8 mx-2">{icon}</h1>
          </IconContext.Provider>
          <h1 className="mx-2 text-xl font-bold hidden xl:contents">Chit</h1>
        </div>
      </div>
    );
}

export default ChitBtn
