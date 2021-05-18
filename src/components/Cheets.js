import React, {forwardRef} from "react";
import { GoVerified } from "react-icons/go";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";

const Cheets = forwardRef(({ displayName, userName, isVerified, timestamp, content, media }, ref) => {
  return (
    <div className="mx-8 py-1 my-4 border-b-2 border-gray-500" ref={ref}>
      <img
        src="./images/Ham_dp.jpg"
        alt=""
        className="w-14 h-14 rounded-full "
      />
      <div className="ml-20">
        <div className="flex flex-row -mt-16 mb-1">
          <div className="mr-0.5">
            <p className="font-bold">{displayName}</p>
          </div>
          <div className="flex items-center mr-2 text-green-500 text-lg">
            <p>{isVerified ? <GoVerified /> : <></>}</p>
          </div>
          <div className="mr-1">
            <p className="font-medium">{userName}</p>
          </div>
          <div className="mr-1">
            <p className="font-medium">·</p>
          </div>
          <div>
            <p className="font-light">{timestamp}</p>
          </div>
        </div>
        <div className="mb-3">
          <p className="font-normal">{content}</p>
        </div>
        {media ? <img src={media} alt="" className="rounded-2xl h-72 w-124" /> : <></>}
        <div className="flex justify-around mt-3 text-xl">
          <div className="bg-green-500 bg-opacity-0 hover:bg-opacity-50 cursor-pointer duration-100 p-2 rounded-full">
            <FaRegComment />
          </div>
          <div className="bg-purple-500 bg-opacity-0 hover:bg-opacity-50 cursor-pointer duration-100 p-2 rounded-full">
            <FaRetweet />
          </div>
          <div className="bg-red-500 bg-opacity-0 hover:bg-opacity-50 cursor-pointer duration-100 p-2 rounded-full">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
})

export default Cheets;
