import React from "react";

const loading = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-6 bg-[#f2f2f2] flex flex-col animate-pulse ">
      <div className="w-full h-10 bg-white rounded-md"></div>
      <div className="w-full h-10 bg-white rounded-md mt-4"></div>
      <div className="w-full h-[120px] bg-white rounded-md mt-2"></div>
      <div className="w-full h-[120px] bg-white rounded-md mt-2"></div>
    </div>
  );
};

export default loading;
