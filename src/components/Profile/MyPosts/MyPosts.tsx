import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>New Post</div>
      <div className="posts">
        <Post message="My first message" />
        <Post message="This is awesome!"/>
      </div>
    </div>
  );
}

export default MyPosts;
