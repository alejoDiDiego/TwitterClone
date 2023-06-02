import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import { useStore } from "../../stores/store";
import * as Yup from "yup";
import TextInput from "../common/form/TextInput";
import { observer } from "mobx-react-lite";
import { toast } from "react-hot-toast";
import ValidationError from "../common/errors/ValidationError";
import { router } from "../../router/Routes";

const RegisterForm = () => {
  const { userStore } = useStore();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        username: "",
        password: "",
        passwordConfirm: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((err) => setErrors({ error: err }))
      }
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email format").required(),
        name: Yup.string().required("Display name is required"),
        username: Yup.string().required("Username is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), undefined], "Passwords must match")
          .required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <form
          className="flex flex-col mx-auto gap-3 mt-6 w-[80%]"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextInput placeholder="Email" name="email" />
          <TextInput placeholder="Username" name="username" />
          <TextInput placeholder="Display name" name="name" />
          <div className="relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 8 characters)"
              name="password"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute cursor-pointer right-2 top-[6px] text-2xl fa-solid ${
                showPassword ? "fa-eye right-[9.5px]" : "fa-eye-slash"
              }`}
            ></i>
          </div>

          <div className="relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="passwordConfirm"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute cursor-pointer right-2 top-[6px] text-2xl fa-solid ${
                showPassword ? "fa-eye right-[9.5px]" : "fa-eye-slash"
              }`}
            ></i>
          </div>

          {errors.error && <ValidationError errors={errors.error} />}
          <button
            disabled={isSubmitting || !isValid}
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
            onClick={() => router.navigate("/login")}
            className="mt-2 text-white cursor-pointer mx-auto"
          >
            Do you already have an account?, Login
          </a>
        </form>
      )}
    </Formik>
  );
};

export default observer(RegisterForm);
