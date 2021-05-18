import React, { useState } from "react";
import ChitBtn from "./CheetBtn";

function ChitBoxTop({addPost}) {
  const [newPost, setNewPost] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    addPost(newPost);
    setNewPost("");
  };

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
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={createPost}
          className="my-2 w-24 ml-auto">
          <ChitBtn />
        </button>
      </form>
    </div>
  );
}

export default ChitBoxTop;
