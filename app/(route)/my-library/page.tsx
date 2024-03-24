import React from "react";
import { TabsDemo } from "./_components/Tab";

const page = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-6 bg-[#f2f2f2] flex flex-col">
      <div>
        <h2 className="text-black text-2xl font-bold">Thư viện của tôi</h2>
      </div>
      <div className="mt-4">
        <TabsDemo />
      </div>
    </div>
  );
};

export default page;
