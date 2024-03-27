import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative flex-col gap-2">
      <div className="p-4 sm:p-6 rounded-md border-b-4 border-r-4 border-slate-600 bg-black w-[320px] sm:w-[480px] max-w-[480px] text-center space-y-3 h-[400px] flex flex-col">
        <div className="rounded-md bg-[#ffffff10] h-10 w-full"></div>
        <div className="rounded-md bg-[#ffffff10] flex-1 w-full mt-2"></div>
        <div className="rounded-md bg-[#ffffff10] flex-1 w-full mt-2"></div>
      </div>
    </div>
  );
};

export default loading;
