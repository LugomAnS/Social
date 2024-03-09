export type PostsPage = {
  posts: PostType[];
}


export type PostType = {
  id: string,
  post: string,
  likesCount: number,
}