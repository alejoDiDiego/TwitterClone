"use client";
import useStore from "@/store/useStore";
import styles from "./leftBar.module.css";
import { useRouter } from "next/navigation";

const LeftBar = () => {
  const router = useRouter();
  const { open, toggleOpen, user } = useStore();

  return (
    <div
      className={`${styles.nav} shadow-lg shadow-white ${
        open ? `${styles.active}` : ""
      }`}
    >
      <ul
        className="
      flex flex-col items-center justify-between gap-5 
      mt-10 
      relative 
      w-[90%] 
      text-[26px] font-semibold text-center"
      >
        <li
          className=" 
        transition-all duration-200 
        cursor-pointer 
        hover:bg-black
        hover:text-white 
        hover:px-3
        hover:rounded-lg
        active:bg-blue-400
        
        "
        >
          <i className="fa-solid fa-poo mr-3 text-blue-400 text-[30px]"></i>
          Fake
        </li>
        <li className="bg-black h-1 w-[90%] rounded-lg"></li>
        <li
          className=" 
        transition-all duration-200 
        cursor-pointer 
        hover:bg-black
        hover:text-white 
        hover:px-3
        hover:rounded-lg
        active:bg-blue-400
        flex justify-center items-center
        "
        >
          <i className="fa-solid fa-magnifying-glass mr-3 text-blue-400 text-[30px]"></i>
          <p>Search Faker</p>
        </li>
        <li className="bg-black h-1 w-[90%] rounded-lg"></li>
        <li
          className=" 
        transition-all duration-200 
        cursor-pointer 
        hover:bg-black
        hover:text-white 
        hover:px-3
        hover:rounded-lg
        active:bg-blue-400
        flex justify-center items-center
        "
        >
          <i className="fa-solid fa-circle-info mr-3 text-blue-400 text-[30px]"></i>
          <p>About us</p>
        </li>
      </ul>

      {user != null ? (
        <div className="flex items-center justify-around w-[90%] mb-10">
          <i className="fa-solid fa-gear text-4xl text-gray-700 transition duration-200  active:rotate-90 cursor-pointer"></i>
          <div>
            <img
              className="w-14 rounded-full transition hover:opacity-75 cursor-pointer mx-auto notSelectable"
              onClick={() => {
                router.push("/profile");
                {
                  window.innerWidth < 550 ? toggleOpen() : null;
                }
              }}
              src="https://th.bing.com/th/id/OIP.bFFJk0mpnAd-JNcUctx1NgHaD4?pid=ImgDet&rs=1"
            />
            <div className="text-center font-semibold mt-1">
              <p className="text-lg -mb-1">{user.user_metadata["username"]}</p>
              <p className="text-base text-gray-400">@pepe</p>
            </div>
          </div>
          <i
            onClick={() => alert("Logout")}
            className="fa-solid fa-right-from-bracket transition duration-200 text-5xl text-red-600 md:hover:scale-110 active:scale-110 md:active:scale-100 cursor-pointer"
          ></i>
        </div>
      ) : null}
    </div>
  );
};

export default LeftBar;
