import React from "react";
import { TabShowLesson } from "./_components/Tab";
import { getLessonByUserId } from "@/action/action-lesson";

const PageMyLibrary = async () => {
  const lessons = await getLessonByUserId();

  return (
    <div className="max-w-screen-md mx-auto mt-6 bg-[#f2f2f2] flex flex-col">
      <div>
        <h2 className="text-black text-2xl font-bold">Thư viện của tôi</h2>
      </div>
      <div className="mt-4">
        <TabShowLesson lessons={lessons} />
      </div>
    </div>
  );
};

export default PageMyLibrary;
