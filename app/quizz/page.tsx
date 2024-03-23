import React from "react";

const page = () => {
  return (
    <div className="w-full h-full relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full absolute top-0 left-0 object-cover"
      >
        <source src="/Start_Game_Universe.mp4" type="video/mp4" />
      </video>
      page
    </div>
  );
};

export default page;
