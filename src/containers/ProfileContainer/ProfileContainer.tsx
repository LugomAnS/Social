import { memo } from "react";
import Profile from "../../components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType } from "../../store/store";
import { PostType } from "../../types/post";
import * as postsAC from '../../store/posts/actions';
import { v1 } from "uuid";

function ProfileContainer() {
  const posts = useSelector<StoreStateType, PostType[]>(state => state.postsPage.posts)
  const dispatch = useDispatch();

  const callbacks = {
    addMessage: (text: string) => dispatch(postsAC.addPostAction(v1(), text))
  }
  return (
    <Profile posts={posts} addMessage={callbacks.addMessage}  />
  )
}

export default memo(ProfileContainer);