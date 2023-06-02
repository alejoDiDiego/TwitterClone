import { observer } from "mobx-react-lite";
import React from "react";
import LoginForm from "./LoginForm";
import { router } from "../../router/Routes";

const Login = () => {
  return (
    <div className="mt-16 flex flex-col w-[350px] sm:w-[450px] md:[550px]">
      <h2 className="text-center text-white text-2xl font-bold">Login</h2>

      <LoginForm />
    </div>
  );
};

export default observer(Login);
