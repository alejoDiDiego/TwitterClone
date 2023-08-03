"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import TextInput from "../common/form/TextInput";
import ValidationError from "../common/form/ValidationError";
import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";

const Form = () => {
  const { register } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        username: "",
        publicName: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email format")
          .required("The email is required"),
        password: Yup.string()
          .required("The password is required")
          .min(8, "Password must be at least 8 characters"),
        passwordConfirm: Yup.string()
          .required("The password is required")
          .oneOf([Yup.ref("password"), undefined], "Passwords must match"),
      })}
      onSubmit={(values, { setErrors }) => {
        register(
          values.email,
          values.password,
          values.username,
          values.publicName
        )
          .then((r) => console.log(r))
          .catch((err) => {
            setError(err["message"]);
          });
      }}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <form
          className="flex flex-col mx-auto gap-3 mt-6 w-[80%] text-black"
          onSubmit={handleSubmit}
        >
          <TextInput
            label="Email"
            placeholder="Email (min 8 characters)"
            name="email"
          />
          <TextInput label="Username" placeholder="Username" name="username" />
          <TextInput
            label="Public Name"
            placeholder="@john"
            name="publicName"
          />
          <div className="relative">
            <TextInput
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 8 characters)"
              name="password"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute cursor-pointer right-2 top-[34px] text-2xl fa-solid ${
                showPassword ? "fa-eye right-[9.5px]" : "fa-eye-slash"
              }`}
            ></i>
          </div>

          <div className="relative">
            <TextInput
              label="Password Confirm"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="passwordConfirm"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute cursor-pointer right-2 top-[34px] text-2xl fa-solid ${
                showPassword ? "fa-eye right-[9.5px]" : "fa-eye-slash"
              }`}
            ></i>
          </div>

          {error.length > 0 ? (
            <p className="text-red-700 font-bold break-words mb-3 mx-auto">
              {error}
            </p>
          ) : null}
          <button
            // disabled={isSubmitting || !isValid}
            type="submit"
            className="bg-blue-400 px-10 py-3 rounded-md shadow-md w-40 shadow-blue-400 text-white transition-all duration-200   
            hover:bg-white 
            hover:text-black hover:shadow-white font-bold mx-auto 
            active:bg-black 
            active:text-white active:shadow-black cursor-pointer"
          >
            Register
          </button>
          <a
            onClick={() => {
              router.push("/login");
            }}
            className="mt-2 text-white cursor-pointer mx-auto"
          >
            Do you already have an account?, Login
          </a>
        </form>
      )}
    </Formik>
  );
};

export default Form;
