import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "../Components/Post.css";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    if (props.postId) {
      unsubscribe = db
        .collection("posts")
        .doc(props.postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [props.postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
      text: comment,
      userName: props.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="Post">
      {/* header -> Avator + User Name  */}
      <div className="post__header">
        <Avatar
          className="post__avator"
          alt={props.userName}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{props.userName}</h3>
      </div>
      {/* Image  */}
      <img className="post__image" src={props.imageURL} alt="picture of cat" />
      {/* UserName + Caption  */}
      <h3 className="post__text">
        <strong> {props.userName} </strong>
        {props.caption}
      </h3>
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.userName}</strong> {comment.text}
          </p>
        ))}
      </div>
      {props.user && (
        <form action="" className="post__commentBox">
          <input
            type="text"
            className="post__input"
            placeholder="Enter you comment.."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            name=""
            id=""
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            {" "}
            Post{" "}
          </button>
        </form>
      )}
    </div>
  );
}
