import React from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="mt-16 flex flex-col w-[350px] sm:w-[450px] md:[550px]">
      <h2 className="text-center text-white text-2xl font-bold">Register</h2>

      <RegisterForm />
    </div>
  );
};

export default Register;
