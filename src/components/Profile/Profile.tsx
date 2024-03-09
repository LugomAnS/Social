import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../../types/post";

type ProfilePropsType = {
  posts: PostType[]
  addMessage: (value: string) => void
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} addMessage={props.addMessage} />
    </div>
  );
}

export default Profile;
