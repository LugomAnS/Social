import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={classes.content}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="My first message" />
        <Post message="This is awesome!" likesCount={23} />
      </div>
    </div>
  );
}

export default MyPosts;
