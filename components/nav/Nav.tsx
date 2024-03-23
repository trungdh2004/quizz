import React from "react";
import { IoMenu } from "react-icons/io5";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SidebarMobile from "../sidebar/SidebarMobile";
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
      <div className="">
        <form
          action=""
          className="flex px-4 py-1 border border-sky-500 rounded-full border-2"
        >
          <input
            type="text"
            placeholder="Mã code..."
            maxLength={7}
            className="border-none h-8 w-[120px]  outline-none"
          />
          <Button className="hidden sm:block" variant={"primary"} size={"sm"}>
            Tìm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
