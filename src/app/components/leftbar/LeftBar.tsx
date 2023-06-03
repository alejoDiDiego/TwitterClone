import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import "./LeftBar.css";
import { router } from "../../router/Routes";
import { useLocation } from "react-router-dom";

const LeftBar = () => {
  const { postStore, globalStore, userStore } = useStore();

  const { open, toggleOpen } = globalStore;

  const { logout, user } = userStore;

  let loc = useLocation();

  return (
    <div className={`nav shadow-lg shadow-white ${open ? "active" : ""}`}>
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
      <div className="flex items-center justify-around w-[90%] mb-10">
        {/* <i className="fa-solid fa-gear text-4xl text-gray-700 transition duration-200  active:rotate-90 cursor-pointer"></i> */}
        <div>
          <img
            className="w-14 rounded-full transition hover:opacity-75 cursor-pointer mx-auto notSelectable"
            onClick={() => {
              router.navigate("/profile");
              toggleOpen();
            }}
            src={
              user?.avatar.length == 0
                ? "https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg"
                : user?.avatar
            }
          />
          <div className="text-center font-semibold mt-1">
            <p className="text-lg -mb-1">{user?.name}</p>
            <p className="text-base text-gray-400">@{user?.username}</p>
          </div>
        </div>
        <i
          onClick={() => logout()}
          className="fa-solid fa-right-from-bracket transition duration-200 text-5xl text-red-600 md:hover:scale-110 active:scale-110 md:active:scale-100 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default observer(LeftBar);
