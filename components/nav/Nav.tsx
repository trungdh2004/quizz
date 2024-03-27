import React from "react";
import { IoMenu } from "react-icons/io5";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SidebarMobile from "../sidebar/SidebarMobile";
import DialogSlug from "./DialogSlug";
const Nav = () => {
  return (
    <div className="h-[60px] fixed top-0 right-0 w-full bg-white shadow-sm lg:w-[calc(100%-200px)] border-b flex items-center justify-between px-8 lg:justify-end">
      <div className="lg:hidden block">
        <SidebarMobile>
          <Button variant={"ghost"}>
            <IoMenu className="w-8 h-8 " />
          </Button>
        </SidebarMobile>
      </div>
      <div className="flex items-center">
        <DialogSlug />
      </div>
    </div>
  );
};

export default Nav;
