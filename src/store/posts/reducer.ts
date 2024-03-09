import { PostType, PostsPage } from "../../types/post";
import { ActionsKeys, ActionsTypes } from "../types";

const initState: PostsPage = {
  posts: [
    { id: "1", post: "My first message", likesCount: 5 },
    { id: "2", post: "This is awesome!", likesCount: 17 },
    { id: "3", post: "Blood for the blood God!!", likesCount: 999 },
  ],
};

export function postsReducers<key extends ActionsKeys>(
  state: PostsPage = initState,
  action: ActionsTypes[key]
): PostsPage {
  switch (action.type) {
    case "ADD-POST":
      const newMessage: PostType = {
        id: action.payload.id,
        post: action.payload.message,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newMessage] };
    default:
      return state;
  }
}
