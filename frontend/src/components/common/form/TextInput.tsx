"use client";

import React from "react";
import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

export default function TextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <div className="flex flex-col">
      <label className="text-white">{props.label}</label>
      <input
        className="border-2 border-none rounded-md py-2 px-3 font-semibold focus:outline-none focus:shadow-outline text-lg pointer-events-auto

        "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <label className=" ml-1 mt-1 text-red-700  break-words">
          {meta.error}
        </label>
      ) : (
        <div className="h-5 mt-1"></div>
      )}
    </div>
  );
}
