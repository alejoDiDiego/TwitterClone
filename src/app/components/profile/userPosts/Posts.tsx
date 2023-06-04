import React, { useEffect, useState } from "react";
import { useStore } from "../../../stores/store";

const Posts = () => {
  const { userStore } = useStore();
  const { getPosts, userPostList } = userStore;

  return (
    <>
      {userPostList.forEach(() => {
        return <p>a</p>;
      })}
    </>
  );
};

export default Posts;
