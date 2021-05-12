import React from 'react'
import NewCheet from './NewCheet'
import Cheets from './Cheets'

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
          content={"When I tell my friends I watch IT Crowd"}
        />
        <Cheets
          displayName={"Hamza Husein"}
          isVerified={true}
          userName={"@itsHamHere"}
          timestamp={"1hr"}
          content={"When I tell my friends I watch IT Crowd"}
        />
        <Cheets
          displayName={"Hamza Husein"}
          isVerified={true}
          userName={"@itsHamHere"}
          timestamp={"1hr"}
          content={"When I tell my friends I watch IT Crowd"}
        />
        <Cheets
          displayName={"Hamza Husein"}
          isVerified={true}
          userName={"@itsHamHere"}
          timestamp={"1hr"}
          content={"When I tell my friends I watch IT Crowd"}
        />
      </div>
    );
}

export default MainFeed
