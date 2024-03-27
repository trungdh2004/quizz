import React from "react";

const loading = () => {
  return (
    <div>
      <div className="h-40 flex items-center justify-center text-3xl font-bold">
        <div className="w-[150px] h-10 bg-white/50 rounded-sm"></div>
      </div>

      <div className="w-full flex flex-col">
        <div className="w-[150px] h-10 bg-white/50 rounded-sm"></div>
        <div className="mt-4 grid grid-cols-5 gap-4">
          <div className="w-full h-[250px] bg-white/50 rounded-sm"></div>
          <div className="w-full h-[250px] bg-white/50 rounded-sm"></div>
          <div className="w-full h-[250px] bg-white/50 rounded-sm"></div>
          <div className="w-full h-[250px] bg-white/50 rounded-sm"></div>
          <div className="w-full h-[250px] bg-white/50 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
