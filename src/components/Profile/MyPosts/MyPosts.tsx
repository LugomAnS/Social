import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export type PostType = {
  id: string,
  post: string,
  likesCount: number,
}

function MyPosts() {

  const postData: PostType[] = [
    { id: "1", post: "My first message", likesCount: 5},
    { id: "2", post: "This is awesome!", likesCount: 17},
    { id: "3", post: "Blood for the blood God!!", likesCount: 999},
  ]

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
      {postData.map(item => (
        <Post key={item.id} likesCount={item.likesCount}  message={item.post}/>
      ))}
      </div>
    </div>
  );
}

export default MyPosts;
