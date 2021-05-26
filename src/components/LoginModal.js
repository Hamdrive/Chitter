import React from "react";
import firebase from "firebase";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "../views/Home"

const loginGoogle = () =>{
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

function LoginModal() {
  let history = useHistory()


  
  return (
    <div className="z-10 bg-gray-500 bg-opacity-70 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white px-10 py-4 rounded-3xl w-96 h-82">
        <div className="-mt-2 mb-8 text-3xl font-bold mx-auto">
          <h3 className="px-24">Login</h3>
          <div className="flex justify-center mt-4">
            <GoogleButton onClick={loginGoogle} />
          </div>
        </div>
        <div className="mt-4 text-2xl py-2 px-2 border-gray-600 border-2 rounded-xl outline-none">
          <input
            className="outline-none"
            type="text"
            name=""
            id=""
            placeholder="Enter email"
          />
        </div>
        <div className="my-4 text-2xl py-2 px-2 border-gray-600 border-2 rounded-xl outline-none">
          <input
            className="outline-none"
            type="password"
            name=""
            id=""
            placeholder="Enter password"
          />
        </div>
        <div className="mt-12 flex justify-around">
          <button className="py-2 px-4 flex justify-center flex-row bg-green-500 rounded-full cursor-pointer hover:bg-green-600 duration-200 w-36">
            <h3 className="text-xl font-normal">Login</h3>
          </button>
          <button
            className="py-2 px-4 flex justify-center flex-row border-2 border-red-600 rounded-full cursor-pointer hover:bg-red-400 duration-200 w-36 "
            onClick={() => history.push("/")}>
            <h3 className="text-xl font-normal">Close</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
