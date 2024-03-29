"use client";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ChallengeProgress, LessonProgress } from "@prisma/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  countLessonProgress: number;
  title: string;
  codeLesson: string;
  id: string;
  lessonProgress: (LessonProgress & {
    challengeProgress: ChallengeProgress[];
  })[];
  index: number;
  isPublic: boolean;
}

const TableLesson = ({
  countLessonProgress,
  title,
  codeLesson,
  id,
  lessonProgress,
  index,
  isPublic,
}: Props) => {
  const router = useRouter();
  const countCorrectChallenge = lessonProgress.reduce(
    (initial, lessonProgres) => {
      const correct = lessonProgres.challengeProgress.filter((item) => {
        return item.completed;
      });
      return initial + correct.length;
    },
    0
  );

  const countChallengeProgress = lessonProgress.reduce(
    (initial, lessonProgres) => {
      return initial + lessonProgres.challengeProgress.length;
    },
    0
  );

  const percentage =
    countChallengeProgress === 0
      ? 0
      : Math.floor((countCorrectChallenge * 100) / countChallengeProgress);

  const onClick = () => {
    router.push(`/report/${id}`);
  };

  const onCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.success("Đã copy mã quizz");
  };
  return (
    <TableRow className="cursor-pointer">
      <TableCell className="font-medium max-sm:hidden" onClick={onClick}>
        {index}
      </TableCell>
      <TableCell className="font-medium max-sm:hidden" onClick={onClick}>
        <div
          className={cn(
            "p-1 bg-green-200 text-green-500 rounded-sm flex items-center justify-center text-center text-xs",
            !isPublic && "bg-rose-200 text-rose-500"
          )}
        >
          {isPublic ? "Xuất bản" : "Chưa xuất bản"}
        </div>
      </TableCell>
      <TableCell
        onClick={onClick}
        className={cn(
          isPublic ? "max-sm:text-green-500" : "max-sm:text-rose-500"
        )}
      >
        {title}
      </TableCell>
      <TableCell className="text-center" onClick={onClick}>
        {countLessonProgress}
      </TableCell>

      <TableCell
        className="text-center flex items-center justify-center"
        onClick={onClick}
      >
        <div className="w-8 h-8">
          <CircularProgressbarWithChildren
            value={Number.isNaN(percentage) ? 0 : percentage}
            styles={{
              path: {
                stroke: "#22c55e",
              },
              trail: {
                stroke: "#e5e7eb",
              },
              text: {
                // Text color
                fontSize: "24px",
              },
            }}
            text={`${percentage}%`}
            strokeWidth={4}
          ></CircularProgressbarWithChildren>
        </div>
        <span className="text-black text-sm font-semibold ml-2 max-sm:hidden">
          {percentage}%
        </span>
      </TableCell>

      <TableCell className="text-center">
        <Button className="w-full " onClick={() => onCopy(codeLesson)}>
          {codeLesson}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableLesson;
