import Nav from "@/components/nav/Nav";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { ReactNode } from "react";

const LayoutLearn = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:ml-[200px] min-h-screen  mx-auto p-4 pt-[60px] sm:p-8 sm:pt-[60px] bg-[#f2f2f2]">
        {children}
      </main>
    </>
  );
};

export default LayoutLearn;
