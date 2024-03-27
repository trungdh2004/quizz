import { cn } from "@/lib/utils";
import { ChallengeProgress, LessonProgress } from "@prisma/client";
import React from "react";

interface Props {
  lessonProgres: LessonProgress & {
    challengeProgress: ChallengeProgress[];
  };
  countChallenge: number;
}

const ReportBodyItem = ({ lessonProgres, countChallenge }: Props) => {
  const correctCount = lessonProgres.challengeProgress.filter(
    (item) => item.completed
  );
  const noCorrectCount = lessonProgres.challengeProgress.filter(
    (item) => !item.completed
  );

  const count = Array.from({ length: countChallenge });

  const percentage = Math.floor((correctCount.length * 100) / countChallenge);

  return (
    <div className="bg-white  rounded-sm">
      <div className="flex items-center border-b gap-4 p-2 ">
        <div className="flex-1 w-full flex items-center">
          <h4 className="text-sm sm:text-base font-bold line-clamp-1">
            {lessonProgres.name}
          </h4>
        </div>
        <div className="min-w-[100px] flex gap-1 sm:gap-3 items-center">
          <div className="flex flex-col px-1 sm:px-2 items-center">
            <h4 className="text-sm sm:text-base font-semibold">
              {Number.isNaN(percentage) ? 0 : percentage}%
            </h4>
            <span className="text-xs font-medium">câu đúng</span>
          </div>
          <div className="flex flex-col px-1 sm:px-2 items-center">
            <h4 className="text-sm sm:text-base font-semibold">
              {correctCount.length}
              <span className="text-xs sm:text-sm font-normal">
                /{countChallenge}
              </span>
            </h4>
            <span className="text-xs font-medium">Điểm số</span>
          </div>
        </div>
      </div>
      <div className="w-full h-10 px-2 flex items-center justify-center gap-0.5">
        {count.map((item, i) => (
          <span
            key={i}
            className={cn(
              "w-full h-5 rounded-sm bg-gray-500",
              i < correctCount.length && "bg-green-500",
              correctCount.length <= i &&
                i < correctCount.length + noCorrectCount.length &&
                "bg-rose-500"
            )}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ReportBodyItem;
