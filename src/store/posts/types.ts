import * as posts from './actions';

type PostsType = typeof posts;
export type PostsKeys = keyof PostsType;

type PostsPageActions = {
  [key in PostsKeys]: ReturnType<PostsType[key]>
}

export default PostsPageActions;