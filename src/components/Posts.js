import { Avatar } from "@material-ui/core";
import React, { forwardRef, useState, useEffect } from "react";
import InputOptions from "../components/InputOptions";
import "../css/Posts.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateIcon from "@material-ui/icons/Create";
import { db } from "../firebase";
import CommentsSection from "../components/CommentsSection";
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";
// import firebase from "firebase";

const Posts = forwardRef(
  ({ name, description, message, imageUrl, likes, shares, comments }, ref) => {
    const [modal, setModal] = useState();
    const [input, setInput] = useState("");
    const [comment, setComments] = useState([]);

    // const user = useSelector(selectUser);

    const Show = () => setModal(true);

    const likeFeed = (e) => {
      alert("post liked");
    };
    const sharedFeed = (e) => {
      alert("post shared");
    };

    ///GET COMMENTS

    useEffect(() => {
      db.collection("comments")
      .onSnapshot((Snapshot) =>
        setComments(
          Snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    }, []);

    const postComment = (e) => {
      e.preventDefault();

      // db.collection("comments").doc().set({

      //   name: user.displayName,
      //   content: input,
      //   imageUrl: user.photoURL,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // });
      alert("feature coming soon");

      setInput("");
    };

    return (
      <div ref={ref} className="post">
        <div className="post-header">
          <Avatar src={imageUrl}>
            {name}
            </Avatar>
          <div className="post-info">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="post-body">
          <p>{message}</p>
        </div>

        <div className="feed-reactions">
          <div className="feedback">
            <div className="left">
              <p>
                <ThumbUpAltIcon /> {likes}
              </p>

              <p>
                <ChatIcon /> {comments}
              </p>
              <p>
                <ShareIcon /> {shares}
              </p>
            </div>
          </div>
        </div>
        <div className="post-buttons">
          <InputOptions
            Icon={ThumbUpAltIcon}
            title="Like"
            color="#dddcdc"
            onClick={likeFeed}
          />
          <InputOptions
            Icon={ChatIcon}
            title="Comment"
            color="#cacaca"
            onClick={Show}
          />
          <InputOptions
            Icon={ShareIcon}
            title="Share"
            color="#1adf6c"
            onClick={sharedFeed}
          />
        </div>
        {/* display comments */}

        {comment.map(({ id, data: { name, content, imageUrl } }) => (
          <CommentsSection
            key={id}
            imageUrl={imageUrl}
            name={name}
            comment={content}
          />
        ))}

        <Modal
          size="sm"
          show={modal}
          onHide={() => setModal(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="comment-container">
              <div className="post-input">
                <CreateIcon />
                <form>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="write a comment"
                  />
                  <button onClick={postComment} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
);

export default Posts;
