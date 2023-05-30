import { observer } from "mobx-react-lite";
import { useStore } from "./app/stores/store";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast/headless";
import { useEffect } from "react";
import LeftBar from "./app/components/leftbar/LeftBar";
import "./App.css";

// alejoh2014@gmail.com
// 1234567890

function App() {
  const { postStore, globalStore, userStore } = useStore();

  const { open, toggleOpen } = globalStore;
  const { authenticate, user, loadingUser, isLoggedIn } = userStore;

  useEffect(() => {
    console.log(loadingUser);
    authenticate();
  }, []);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl font-bold text-blue-400 ">Faketter</h2>
        <h3 className="text-white font-bold text-3xl text-center mx-12">
          You must be logged in to continue
        </h3>
        <div className="flex flex-col items-center justify-center gap-5 font-bold text-lg">
          <button className="bg-white px-10 py-3 w-40 rounded-md shadow-md shadow-white transition-all duration-200   active:bg-blue-400 active:text-white active:shadow-blue-400">
            Login
          </button>
          <button className="bg-blue-400 px-10 py-3 rounded-md shadow-md w-40 shadow-blue-400 text-white transition-all duration-200   active:bg-white active:text-black active:shadow-white">
            Register
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <nav className=" h-20 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-blue-400 ">Faketter</h2>
      </nav>
      <div className="container">
        <i
          onClick={() => toggleOpen()}
          className={`transition-all ${
            open == false
              ? "fa-solid fa-bars button"
              : "fa-solid fa-xmark button"
          }`}
        ></i>
        <LeftBar />
        <Outlet />
      </div>
    </div>
  );
}

export default observer(App);
