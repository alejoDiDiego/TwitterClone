import React, { useEffect, useState } from "react";
import { useStore } from "../../../stores/store";
import InfiniteScroll from "react-infinite-scroller";

// interface Props {
//   min: number;
//   max: number;
//   setMin: (min: number) => void;
//   setMax: (max: number) => void;
// }

// const Posts = ({ min, max, setMin, setMax }: Props) => {
const Posts = () => {
  const { userStore } = useStore();
  const { getPosts, userPostList } = userStore;

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      {Array.from(userPostList).map((a, b) => (
        <p>{a[1].content}</p>
      ))}
    </div>
  );
};

export default Posts;
