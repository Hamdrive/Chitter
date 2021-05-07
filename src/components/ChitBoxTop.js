import React from "react";
import ChitBtn from "./ChitBtn";

function ChitBoxTop() {
  return (
    <div className="border-b-8 border-red-500">
      <form>
        <div className="flex flex-row">
          <img
            src="./images/Ham_dp.jpg"
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <input
            type="text"
            placeholder="Whats happening?"
            className="w-full h-16 pl-2"
          />
        </div>
        <div className="mb-2 mr-0">
          <ChitBtn />
        </div>
      </form>
    </div>
  );
}

export default ChitBoxTop;
