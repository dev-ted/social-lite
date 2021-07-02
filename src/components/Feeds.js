import React, { useState, useEffect } from "react";
import "../css/Feeds.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";

import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InputOptions from "./InputOptions";
import Posts from "../components/Posts";
import { db } from "../firebase";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feeds() {
  // useState
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    // db.collection("posts")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snapshot) =>
    //     setPosts(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       }))

    //     )

    //   );

    db.collection("userposts")
      
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const postFeed = (e) => {
    e.preventDefault(); //prevent form from refreshing
    // db.collection("posts").add({
    //   name: user.displayName,
    //   description: user.email,
    //   message: input,
    //   uid:user.uid,
    //   imageUrl: user.photoURL,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   likes: 0,
    //   shares: 0,
    //   comments:0,

    //   //get time stamp from firebase
    // });
    db.collection("userposts")

      .doc('posts')
      .collection(user?.uid)
      .add({
        name: user.displayName,
        description: user.email,
        message: input,
        uid: user.uid,
        imageUrl: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        shares: 0,
        comments: 0,

        //get time stamp from firebase
      })
      .catch((err) => {
        alert(err.message);
      });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Post something"
            />
            <button onClick={postFeed} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed-input-options">
          <InputOptions Icon={ImageIcon} title="Photo" color="#1cb0e6" />
          <InputOptions
            Icon={MovieCreationIcon}
            title="Video"
            color="#df6a0a"
          />
          <InputOptions Icon={EventNoteIcon} title="Events" color="#1ae6b9" />
        </div>
      </div>
      {/* posts */}
      {/* <FlipMove> */}
        {posts.map(
          ({
            id,
            data: {
              name,
              description,
              message,
              imageUrl,
              likes,
              shares,
              comments,
              timestamp,
            },
          }) => (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              imageUrl={imageUrl}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      {/* </FlipMove> */}
    </div>
  );
}

export default Feeds;
