import Form from "@/components/Login/Form";
import React from "react";

const Login = () => {
  return (
    <div className="mt-16 flex flex-col w-[350px] sm:w-[450px] md:[550px]">
      <h2 className="text-center text-white text-2xl font-bold">Login</h2>

      <Form />
    </div>
  );
};

export default Login;
