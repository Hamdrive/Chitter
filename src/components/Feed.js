import React from 'react'
import NewCheet from './NewCheet'
import Cheets from './Cheets'

function MainFeed() {
    return (
      <div>
        <div className="h-12 text-2xl font-bold flex items-center mx-8 sticky top-0">
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
