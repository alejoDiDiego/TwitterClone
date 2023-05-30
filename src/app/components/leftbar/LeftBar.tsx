import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import "./LeftBar.css";

const LeftBar = () => {
  const { postStore, globalStore } = useStore();

  const { open, toggleOpen } = globalStore;

  return (
    <div className={`nav ${open ? "active" : ""}`}>
      <ul className="flex flex-col items-center justify-between gap-5 mt-10 relative w-[90%]">
        <li className="text-3xl font-semibold text-center">Fakear</li>
        <li className="bg-black h-1 w-[90%] rounded-lg"></li>
        <li className="text-3xl font-semibold text-center">
          Mis Publicaciones
        </li>
        <li className="bg-black h-1 w-[90%] rounded-lg"></li>
        <li className="text-3xl font-semibold text-center">Mis Likes</li>
        <li className="bg-black h-1 w-[90%] rounded-lg"></li>
        <li className="text-3xl font-semibold text-center">Mis Comentarios</li>
      </ul>
      <div className="flex items-center justify-around w-[90%] mb-10">
        <i className="fa-solid fa-gear text-4xl text-gray-700"></i>
        <i className="fa-solid fa-right-from-bracket text-4xl text-red-600"></i>
      </div>
    </div>
  );
};

export default observer(LeftBar);
