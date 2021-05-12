import React from "react";
import NewCheet from "./NewCheet";
import Cheets from "./Cheets";

function MainFeed() {
  return (
    <div>
      <div className="h-12 text-2xl font-bold flex items-center pl-8 sticky top-0 border-b-2 border-gray-400 bg-white">
        <h1>Home</h1>
      </div>
      <NewCheet />
      <Cheets
        displayName={"Hamza Husein"}
        isVerified={true}
        userName={"@itsHamHere"}
        timestamp={"1hr"}
        content={"My friends whenever I score more in the test..."}
        media={"./images/Jen-nerd.gif"}
      />
      <Cheets
        displayName={"Hamza Husein"}
        isVerified={true}
        userName={"@itsHamHere"}
        timestamp={"48min"}
        content={"Me after opening too many tabs in Chrome again...👀"}
        media={"./images/Moss-fire.gif"}
      />
      <Cheets
        displayName={"Hamza Husein"}
        isVerified={true}
        userName={"@itsHamHere"}
        timestamp={"4hr"}
        content={"When someone tells me they haven't watched IT crowd"}
        media={"./images/Roy-wtf.gif"}
      />
      <Cheets
        displayName={"Hamza Husein"}
        isVerified={true}
        userName={"@itsHamHere"}
        timestamp={"29min"}
        content={"How long do you think it takes Richmond to apply makeup?"}
        media={"./images/Richmond.gif"}
      />
    </div>
  );
}

export default MainFeed;
