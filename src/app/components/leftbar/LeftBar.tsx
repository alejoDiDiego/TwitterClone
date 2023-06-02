import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import "./LeftBar.css";

const LeftBar = () => {
  const { postStore, globalStore, userStore } = useStore();

  const { open, toggleOpen } = globalStore;

  const { logout } = userStore;

  return (
    <div className={`nav ${open ? "active" : ""}`}>
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
          Fakear
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
          Mis Publicaciones
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
          Mis Likes
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
          Mis Comentarios
        </li>
      </ul>
      <div className="flex items-center justify-around w-[90%] mb-10">
        <i className="fa-solid fa-gear text-4xl text-gray-700 transition duration-200  active:rotate-90 cursor-pointer"></i>
        <i
          onClick={() => logout()}
          className="fa-solid fa-right-from-bracket transition duration-200 text-4xl text-red-600 md:hover:scale-110 active:scale-110 md:active:scale-100 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default observer(LeftBar);
