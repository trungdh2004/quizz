import React from "react";
import { FaStar } from "react-icons/fa";
import CarouselLesson from "./_components/CarouselLesson";
import { auth } from "@clerk/nextjs";
import { getAllLessonSystem } from "@/action/action-lesson";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = auth();
  const lessonSystems = await getAllLessonSystem();

  if (!userId) {
    redirect("/");
  }

  return (
    <div>
      <div className="h-40 flex items-center justify-center text-3xl font-bold">
        Hôm nay bạn học gì ?
      </div>

      <div className="w-full">
        <div className="flex items-end mb-4">
          <FaStar className="w-8 h-8 text-yellow-400 mr-2" />
          <h4 className="text-xl font-bold">Bài tập khởi động</h4>
        </div>
        <CarouselLesson lessonSystems={lessonSystems} />
      </div>
    </div>
  );
};

export default Page;
