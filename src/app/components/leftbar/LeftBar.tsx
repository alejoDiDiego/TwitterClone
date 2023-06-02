import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import "./LeftBar.css";

const LeftBar = () => {
  const { postStore, globalStore, userStore } = useStore();

  const { open, toggleOpen } = globalStore;

  const { logout, user } = userStore;

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
        "
        >
          My Fakes
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
        "
        >
          My Likes
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
        "
        >
          My Comments
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
        "
        >
          Followed
        </li>
      </ul>
      <div className="flex items-center justify-around w-[90%] mb-10">
        {/* <i className="fa-solid fa-gear text-4xl text-gray-700 transition duration-200  active:rotate-90 cursor-pointer"></i> */}
        <div>
          <img
            className="w-14 rounded-full transition-all hover:opacity-75 cursor-pointer "
            src={
              user?.avatar.length == 0
                ? "https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg"
                : user?.avatar
            }
          />
          <p className="text-center font-semibold mt-2">@{user?.username}</p>
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
