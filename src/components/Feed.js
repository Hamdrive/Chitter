import React from 'react'
import ChitBoxTop from './NewCheet'
import MainFeedChits from './Cheets'

function MainFeed() {
    return (
      <div>
        <div className="h-12 text-2xl font-bold flex items-center mx-8">
          <h1>Home</h1>
        </div>
        <ChitBoxTop />
        <MainFeedChits />
      </div>
    );
}

export default MainFeed
