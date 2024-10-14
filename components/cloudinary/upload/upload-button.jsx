"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadButton = () => {
  return (
    <CldUploadWidget  uploadPreset="hashemi">
      {({ open }) => {
        return <button onClick={() => open()} className="bg-orange-400 rounded py-2 px-4 mb-4 text-white">Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};

export default UploadButton;
