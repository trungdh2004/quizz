import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { GrCircleQuestion } from "react-icons/gr";
import ReportHeader from "./_components/ReportHeader";
import ReportBodyList from "./_components/ReportBodyList";
import { getLessonByIdAndChallengeAndUserIdAndLessonProgress } from "@/action/action-lesson";
import { redirect } from "next/navigation";

const ReportLessonId = async ({
  params,
}: {
  params: {
    lessonId: string;
  };
}) => {
  const lessons = await getLessonByIdAndChallengeAndUserIdAndLessonProgress(
    params.lessonId
  );

  if (!lessons) {
    redirect("/report");
  }
  const challenges = lessons?.challenges;
  const lessonProgress = lessons?.lessonProgress;
  return (
    <div className="py-2 sm:p-4 w-full">
      <ReportHeader
        title={lessons.title}
        createdAt={lessons.createdAt}
        challenges={challenges}
        lessonProgress={lessonProgress}
      />

      {/* //todo ================= */}
      <ReportBodyList 
        challenges={challenges}
        lessonProgress={lessonProgress}
      />
    </div>
  );
};

export default ReportLessonId;
