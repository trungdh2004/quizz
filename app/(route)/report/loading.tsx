import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full p-4 lg:p-8 flex flex-col animate-pulse">
      <div className="w-[150px] h-6 bg-white/50 rounded-sm"></div>
      <div className="mt-2 w-full h-[400px] bg-white/50 rounded-sm"></div>
    </div>
  );
};

export default loading;
