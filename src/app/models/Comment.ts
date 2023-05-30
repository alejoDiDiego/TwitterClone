export default interface Comment {
  id: string;
  created: string;
  userId: string;
  postId: string;
  commentId?: string;
  content: string;
  images: string[];
}
