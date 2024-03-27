import React from "react";
import HeaderHome from "./_components/HeaderHome";
import BrulOverlay from "./_components/BrulOverlay";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BrulOverlay />
      <HeaderHome />
      <div className="flex-1 h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
