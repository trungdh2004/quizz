import React from "react";

const LayoutQuizz = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* video  */}

      <video
        className="w-full h-full absolute top-0 left-0 object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src="/Start_Game_Universe.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default LayoutQuizz;
