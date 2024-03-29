import { Challenge, ChallengeProgress, LessonProgress } from "@prisma/client";
import React from "react";
import ReportBodyItem from "./ReportBodyItem";

interface Props {
  challenges: Challenge[];
  lessonProgress: (LessonProgress & {
    challengeProgress: ChallengeProgress[];
  })[];
}

const ReportBodyList = ({ challenges, lessonProgress }: Props) => {
  return (
    <div className=" bg-slate-100 overflow-hidden rounded-lg mt-4">
      <div className="p-4 w-full bg-white flex items-center justify-end">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-green-500 mr-2"></div>
            <span className="text-sm font-semibold ">Đúng</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-rose-500 mr-2"></div>
            <span className="text-sm font-semibold ">Sai</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-500 mr-2"></div>
            <span className="text-sm font-semibold ">Chưa làm</span>
          </div>
        </div>
      </div>
      <div className="p-2 sm:p-4 space-y-2">
        {lessonProgress.map((lessonProgres) => (
          <ReportBodyItem
            key={lessonProgres.id}
            lessonProgres={lessonProgres}
            countChallenge={challenges.length}
          />
        ))}

        {lessonProgress.length === 0 && (
          <div className="w-full p-4 text-center">
            <p className="text-base font-semibold">
              Chưa có ai làm bài quizz !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportBodyList;
