import React from 'react'
import {BiSearch} from "react-icons/bi"

function Search() {
    return (
      <div className="flex flex-row items-center w-full h-12 mt-0.5 bg-gray-200 focus-within:bg-gray-300 rounded-full text-lg font-medium">
        <BiSearch className="ml-6" />
        <input
          type="search"
          placeholder="Search Chitter"
          className="bg-transparent outline-none pl-4"
        />
      </div>
    );
}

export default Search
