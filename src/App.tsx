import { observer } from "mobx-react-lite";
import { useStore } from "./app/stores/store";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast/headless";
import { useEffect, useState } from "react";
import LeftBar from "./app/components/leftbar/LeftBar";
import "./App.css";
import Home from "./app/components/home/Home";
import { router } from "./app/router/Routes";

// Pocketbase admin
// alejoh2014@gmail.com
// 1234567890

// Run the program
// npm run dev
// pocketbase serve

function App() {
  const { postStore, globalStore, userStore } = useStore();

  const { open, toggleOpen } = globalStore;
  const { authenticate, user, loadingUser, isLoggedIn } = userStore;

  let loc = useLocation();

  useEffect(() => {
    authenticate();
  }, []);

  useEffect(() => {
    console.log(isLoggedIn);
    console.log(user);
  }, [user]);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>

      {isLoggedIn ? (
        <>
          <nav className="h-20  flex items-center justify-center md:justify-start shadow-md shadow-black ">
            <h2
              onClick={() => router.navigate("/")}
              className="text-4xl font-bold text-blue-400 cursor-pointer transition-all hover:text-white active:text-white md:ml-[100px] md:active:text-blue-400"
            >
              Faketter
            </h2>
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
        </>
      ) : loc.pathname === "/" ? (
        <Home />
      ) : (
        <div>
          <nav className=" h-20 flex items-center justify-center">
            <a
              className="text-4xl font-bold text-blue-400 cursor-pointer transition-all duration-200 hover:text-white"
              onClick={() => router.navigate("/")}
            >
              Faketter
            </a>
          </nav>
          <div className="flex flex-col items-center justify-center">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default observer(App);
