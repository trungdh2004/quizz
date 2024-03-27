import React from "react";

const loading = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="w-full h-[200px] rounded-md bg-white/50"></div>
      <div className="w-full h-[500px] rounded-md bg-white/50 mt-4 p-4">
        <div className="w-full h-[100px] bg-slate-100 rounded-sm"></div>
        <div className="w-full h-[100px] bg-slate-100 rounded-sm mt-2"></div>
      </div>
    </div>
  );
};

export default loading;
