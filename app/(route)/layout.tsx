import Nav from "@/components/nav/Nav";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { ReactNode } from "react";

const LayoutLearn = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:ml-[200px] h-full pt-[60px] mx-auto p-8">
        {children}
      </main>
    </>
  );
};

export default LayoutLearn;
