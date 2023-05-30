export default interface Like {
  id: string;
  created: string;
  userId: string;
  postId: string;
  commentId?: string;
}
