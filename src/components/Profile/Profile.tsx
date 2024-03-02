import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../../types/post";
import { StoreActionType } from "../../redux/state";

type ProfilePropsType = {
  posts: PostType[]
  dispatch: (value: StoreActionType) => void
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
