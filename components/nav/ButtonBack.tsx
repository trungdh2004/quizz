"use client";
import React from "react";
import { Button } from "../ui/button";
import { IoMdReturnLeft } from "react-icons/io";

const ButtonBack = () => {
  const onClick = () => {
    window.history.back();
  };
  return (
    <div>
      <Button variant={"ghost"} onClick={onClick}>
        <IoMdReturnLeft className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ButtonBack;
