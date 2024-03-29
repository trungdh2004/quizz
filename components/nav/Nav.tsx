import React from "react";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import SidebarMobile from "../sidebar/SidebarMobile";
import DialogSlug from "./DialogSlug";
import { IoMdReturnLeft } from "react-icons/io";
import ButtonBack from "./ButtonBack";
const Nav = () => {
  return (
    <div className="h-[60px] fixed top-0 right-0 w-full bg-white shadow-sm lg:w-[calc(100%-200px)] border-b flex items-center justify-between px-4 lg:px-8 lg:justify-between z-10">
      <div>
        <ButtonBack />
      </div>
      <div className="lg:hidden block">
        <SidebarMobile>
          <Button variant={"ghost"} className="px-0">
            <IoMenu className="w-8 h-8 " />
          </Button>
        </SidebarMobile>
      </div>
      <div className="flex items-center max-lg:hidden">
        <DialogSlug />
      </div>
    </div>
  );
};

export default Nav;
