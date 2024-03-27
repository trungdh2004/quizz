import {
  Challenge,
  ChallengeProgress,
  Lesson,
  LessonProgress,
} from "@prisma/client";
import { formatDistance } from "date-fns";
import { vi } from "date-fns/locale";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrCircleQuestion } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";

interface Props {
  title: string;
  createdAt: any;
  challenges: Challenge[];
  lessonProgress: (LessonProgress & {
    challengeProgress: ChallengeProgress[];
  })[];
}

const ReportHeader = ({
  title,
  challenges,
  createdAt,
  lessonProgress,
}: Props) => {
  const correctProgress = lessonProgress.reduce((initial, lessonProgres) => {
    const count = lessonProgres.challengeProgress.filter((challengeProgres) => {
      return challengeProgres.completed;
    });

    return initial + count.length;
  }, 0);

  const countSentences = lessonProgress.reduce((initial, lessonProgres) => {
    return initial + lessonProgres.challengeProgress.length;
  }, 0);

  const percentage = Math.floor((correctProgress * 100) / countSentences);

  return (
    <div className="w-full rounded-lg border overflow-hidden bg-white">
      <div className="p-4 border-b bg-slate-50">
        <h1 className="text-xl font-bold mb-1">{title}</h1>
        <p className="text-xs text-slate-400">
          {formatDistance(new Date(), createdAt, {
            locale: vi,
          })}
        </p>
      </div>
      <div className="p-4 grid grid-cols-2 lg:grid-cols-3  gap-4">
        <div className="flex-1 p-1 sm:p-3 rounded-md border flex items-center">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-md flex items-center justify-center">
            <FaRegCircleCheck className="text-xs sm:text-base" />
          </div>
          <div className="h-12 ml-2">
            <p className="text-slate-400 text-xs sm:text-sm">Câu đúng</p>
            <span className="text-sm sm:text-xl font-[900]">
              {Number.isNaN(percentage) ? 0 : percentage}%
            </span>
          </div>
        </div>
        <div className="flex-1 p-1 sm:p-3 rounded-md border flex items-center">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-md flex items-center justify-center">
            <LuUsers className="text-xs sm:text-base" />
          </div>
          <div className="h-12 ml-2">
            <p className="text-slate-400 text-xs sm:text-sm">
              Tổng số học sinh
            </p>
            <span className="text-sm sm:text-xl font-[900]">
              {lessonProgress.length}
            </span>
          </div>
        </div>
        <div className="flex-1 p-1 sm:p-3 rounded-md border flex items-center">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-100 rounded-md flex items-center justify-center">
            <GrCircleQuestion className="text-xs sm:text-base" />
          </div>
          <div className="h-12 ml-2">
            <p className="text-slate-400 text-xs sm:text-sm">Câu hỏi</p>
            <span className="text-sm sm:text-xl font-[900]">
              {challenges.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
