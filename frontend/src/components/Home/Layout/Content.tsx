"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import LeftBar from "@/components/common/leftBar/LeftBar";
import useStore from "@/store/useStore";
import styles from "./content.module.css";

const Content = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { open, toggleOpen } = useStore();

  const { user, autoLogin, loading, toggleLoading } = useStore();

  useEffect(() => {
    if (!user) {
      autoLogin();
      console.log(user);
    }
    toggleLoading();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <nav className="h-20  flex items-center justify-center md:justify-start shadow-md shadow-black ">
        <h2
          onClick={() => router.push("/")}
          className="text-4xl font-bold text-blue-400 cursor-pointer transition-all hover:text-white active:text-white md:ml-[100px] md:active:text-blue-400 notSelectable"
        >
          Faketter
        </h2>
      </nav>
      <div className="">
        <div className={styles.box}>
          <i
            onClick={() => toggleOpen()}
            className={`transition-all ${styles.button} ${
              open == false ? `fa-solid fa-bars` : `fa-solid fa-xmark`
            }`}
          ></i>
        </div>
        <LeftBar />
        <div className="md:ml-[350px] flex justify-center">{children}</div>
      </div>
    </>
  );
};

export default Content;
