import Form from "@/components/Register/Form";
import React from "react";

const Register = () => {
  return (
    <div className="mt-16 flex flex-col w-[350px] sm:w-[450px] md:w-[550px]">
      <h2 className="text-center text-white text-2xl font-bold">Register</h2>
      <Form />
    </div>
  );
};

export default Register;
