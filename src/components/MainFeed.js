import React, { useState, useEffect } from "react";
import NewCheet from "./NewCheet";
import Cheets from "./Cheets";
import db from "./Firebase";
import firebase from "firebase"
import FlipMove from "react-flip-move"
import uniqid from "uniqid"

function MainFeed() {
  const [posts, setPosts] = useState([]);
  const postsUser = db.collection("posts");

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const getPosts = () => {
    postsUser.orderBy("firebaseTimestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          displayName: doc.data().displayName,
          userName: doc.data().userName,
          isVerified: doc.data().isVerified,
          timestamp: doc.data().timestamp,
          content: doc.data().content,
          media: doc.data().media,
        }))
      )
    );
  }

  const postTime = () => {
    const minute = Math.floor(Math.random() * 60).toString() + "m";
    const hour = Math.floor(Math.random() * 24).toString() + "h";
    const time = [minute, hour];
    return time[Math.floor(Math.random() * 2)];
  };

  const addPost = (content, media=null) => {
    postsUser.add({
      displayName: "Hamza Husein",
      userName: "@itsHamHere",
      isVerified: true,
      timestamp: postTime(),
      content: content,
      media: media,
      firebaseTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="max-w-2xl">
      <div className="h-12 text-2xl font-bold flex items-center pl-8 sticky top-0 border-b-2 border-gray-400 bg-white z-10">
        <h1>Home</h1>
      </div>
      <NewCheet addPost={addPost} />
      <FlipMove>
        {posts.map((post) => (
          <Cheets
            key={uniqid()}
            displayName={post.displayName}
            isVerified={post.isVerified}
            userName={post.userName}
            timestamp={post.timestamp}
            content={post.content}
            media={post.media}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default MainFeed;
