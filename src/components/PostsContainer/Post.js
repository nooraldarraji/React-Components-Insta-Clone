// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes2, setLikes2] = useState(props.likes)
  const { post } = props
  // const ll = props.likes
  // console.log(likes2, 'likessss')

  // console.log(ll, 'likes before fun')
  // const iLikes = () => {
  //   console.log(ll, 'likes inside function')
  //   return (ll > props.likes) ? setLikes(props.likes + 1) : setLikes(props.likes - 1)
  // }
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes2} setLikes={setLikes2} />
      <CommentSection comments={props.post.comments}
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;


