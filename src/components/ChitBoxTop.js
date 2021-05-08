import React from "react";
import ChitBtn from "./ChitBtn";

function ChitBoxTop() {
  return (
    <div className="border-b-8 border-gray-400">
      <form className="mx-8">
        <div className="flex flex-row border-b-2 border-gray-400">
          <img
            src="./images/Ham_dp.jpg"
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <input
            type="text"
            placeholder="Whats happening?"
            className="w-full h-20 pl-6 mb-12 outline-none text-2xl"
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