import React from "react";
import Search from "./Search";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Stories() {
  return (
    <div className="w-full h-full">
      <Search />
      <TwitterTimelineEmbed
        sourceType="list"
        ownerScreenName="palafo"
        slug="breakingnews"
        options={{ height: 800 }}
        className="w-96 h-96"
      />
    </div>
  );
}

export default Stories;
