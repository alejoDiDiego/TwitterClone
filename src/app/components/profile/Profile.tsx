import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useStore } from "../../stores/store";
import Posts from "./userPosts/Posts";

const Profile = () => {
  console.log("profile");
  const { postStore, globalStore, userStore } = useStore();

  const { logout, user } = userStore;

  const { getPosts, userPostList } = userStore;

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  useEffect(() => {
    getPosts(min, max);
  }, []);

  const [seeFakes, setSeeFakes] = useState(true);
  const [seReFakes, setSeeReFakes] = useState(false);
  const [seeLikes, setSeeLikes] = useState(false);

  const modal = (change: string) => {
    if (change === "fakes") {
      setSeeFakes(true);
      setSeeReFakes(false);
      setSeeLikes(false);
    }

    if (change === "reFakes") {
      setSeeFakes(false);
      setSeeReFakes(true);
      setSeeLikes(false);
    }

    if (change === "likes") {
      setSeeFakes(false);
      setSeeReFakes(false);
      setSeeLikes(true);
    }
  };

  return (
    <div className="text-white">
      <div className="mx-auto flex flex-col items-center w-full">
        <img
          src={
            user?.avatar.length == 0
              ? "https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg"
              : user?.avatar
          }
          className="w-[200px] mt-10 rounded-full mb-5"
        />
        <div className="text-center font-bold">
          <p className="text-3xl">{user?.name}</p>
          <p className="text-xl mb-2 text-gray-400">@{user?.username}</p>
        </div>
      </div>

      <div className="flex justify-center align-middle gap-5 text-black bg-white mx-10 py-2 font-bold text-xl rounded-lg mt-4 shadow-md shadow-black">
        <button
          className={`px-2 transition duration-200 py-1 rounded-lg hover:bg-black hover:text-white ${
            seeFakes ? "bg-black text-white " : ""
          }`}
          onClick={() => modal("fakes")}
        >
          Fakes
        </button>
        <button
          className={`px-2 transition duration-200 py-1 rounded-lg hover:bg-black hover:text-white   ${
            seReFakes ? "bg-black text-white " : ""
          }`}
          onClick={() => modal("reFakes")}
        >
          ReFakes
        </button>
        <button
          className={`px-2 transition duration-200 py-1 rounded-lg hover:bg-black hover:text-white   ${
            seeLikes ? "bg-black text-white " : ""
          }`}
          onClick={() => modal("likes")}
        >
          Likes
        </button>
      </div>

      <div className="mx-10 mt-5">
        {seeFakes ? (
          <>
            {userPostList.forEach((p) => {
              return <p>{p.id}</p>;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default observer(Profile);
