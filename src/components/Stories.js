import React from "react";
import Search from "./Search";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Stories() {
  return (
    <div className="w-full h-full">
      <div className="my-4">
        <Search />
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Things happening elsewhere</h1>
        </div>
        <TwitterTimelineEmbed
          sourceType="list"
          noHeader={true}
          noFooter={true}
          ownerScreenName="palafo"
          slug="breakingnews"
          options={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default Stories;
