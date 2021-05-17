import React, { useState, useEffect } from "react";
import NewCheet from "./NewCheet";
import Cheets from "./Cheets";
import db from "./Firebase";

function MainFeed() {
  const [posts, setPosts] = useState([]);
  const postsUser = db.collection("posts");

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const getPosts = () =>
    postsUser.onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          displayName: doc.data().displayName,
          userName: doc.data().userName,
          isVerified: doc.data().isVerified,
          timestamp: doc.data().timestamp,
          content: doc.data().content,
          media: doc.data().media
        }))
      )
    );

  

  console.log(posts)

  return (
    <div>
      <div className="h-12 text-2xl font-bold flex items-center pl-8 sticky top-0 border-b-2 border-gray-400 bg-white">
        <h1>Home</h1>
      </div>
      <NewCheet />
      {posts.map((post) => (
        <Cheets
          displayName={post.displayName}
          isVerified={post.isVerified}
          userName={post.userName}
          timestamp={
            post.timestamp
          }
          content={post.content}
          media={post.media}
        />
      ))}
      {/* <Cheets
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
      /> */}
    </div>
  );
}

export default MainFeed;
