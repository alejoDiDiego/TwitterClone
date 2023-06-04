export default interface Post {
  id: string;
  created: string;
  creatorId: string;
  content: string;
  media: string[];
  postId: string | null;
}
