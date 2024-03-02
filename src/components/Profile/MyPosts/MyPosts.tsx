import React, { ChangeEvent, useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../types/post";
import { StoreActionType } from "../../../redux/state";
import { addPostAction } from "../../../redux/actions";

type MyPostsPropsType = {
  posts: PostType[];
  dispatch: (value: StoreActionType) => void
}

function MyPosts(props: MyPostsPropsType) {
  const [text, setText] = useState("");

  const callbacks = {
    onAddPost: () => {
      props.dispatch(addPostAction(text));
      setText('');
    },
    onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value),
  }

  return (
    <div className={classes.content}>
      <h3>My posts</h3>
      <div>
        <textarea value={text} onChange={callbacks.onChangeText}></textarea>
      </div>
      <div>
        <button onClick={callbacks.onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>
      {props.posts.map(item => (
        <Post key={item.id} likesCount={item.likesCount}  message={item.post}/>
      ))}
      </div>
    </div>
  );
}

export default MyPosts;
