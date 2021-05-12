import React from "react";
import ChitBtn from "./CheetBtn";

function ChitBoxTop() {
  return (
    <div className="border-b-8 border-gray-400">
      <form className="mx-8">
        <div className="flex flex-row border-b-2 border-gray-400 py-2">
          <img
            src="./images/Ham_dp.jpg"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <input
            type="text"
            placeholder="Whats happening?"
            className="w-full pl-6  outline-none text-2xl" //mb-12
          />
        </div>
        <div className="my-2 w-24 ml-auto">
          <ChitBtn />
        </div>
      </form>
    </div>
  );
}

export default ChitBoxTop;
