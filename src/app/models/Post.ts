export default interface Post {
  id: string;
  created: string;
  creatorId: string;
  content: string;
  media: string[] | null;
  postId: string | null;
}
