import React from "react";
import { GiSquirrel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { auth } from "../components/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./Home";
import { useHistory } from "react-router-dom";

function LandingPage() {
  let history = useHistory();

  auth.onAuthStateChanged(function (user) {
    if (user) {
      history.push("/home");
    } else {
      
    }
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full bg-landingimg">
        <div className="mb-20 w-5/12 ml-auto">
          <div className="mt-1 py-2 px-2 md:mx-auto lg2:w-16 lg:w-10 md:w-8">
            <GiSquirrel className=" lg2:h-12 lg2:w-12 lg:h-10 lg:w-10 md:h-8 md:w-8" />
          </div>
          <h1 className="flex justify-center items-center text-7xl">Chitter</h1>
          <div className="flex flex-col">
            <h1 className="flex justify-center items-center text-3xl mt-4 ">
              See what's popping in your forest 🥜
            </h1>
            <h1 className="flex justify-center items-center text-3xl font-bold mt-20">
              Join Chitter now.
            </h1>
          </div>

          <div className="flex mt-20 flex-col">
            <Link to="/signup">
              <div className="my-4 mx-auto py-2 px-4 flex justify-center flex-row bg-green-500 rounded-full cursor-pointer hover:bg-green-600 duration-200 w-72 font-medium text-xl">
                Signup
              </div>
            </Link>
            <Link to="/login">
              <div className="my-4 mx-auto py-2 px-4 flex justify-center flex-row border-2 border-green-600 rounded-full cursor-pointer hover:bg-green-400 duration-200 w-72 font-medium text-xl">
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
