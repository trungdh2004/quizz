import React from "react";
import HeaderHome from "./_components/HeaderHome";
import FooterHome from "./_components/FooterHome";
import BrulOverlay from "./_components/BrulOverlay";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BrulOverlay />
      <HeaderHome />
      <div className="flex-1 ">{children}</div>
    </div>
  );
};

export default Layout;
