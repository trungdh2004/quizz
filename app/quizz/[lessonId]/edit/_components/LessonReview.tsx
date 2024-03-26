import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiBooksLight, PiGraduationCap } from "react-icons/pi";

interface Props {
  bgColor: string;
  title: string;
  countChallenge: number;
  countLessonProgress: number;
  username: string;
  avatar: string;
  createdAt?: string;
}

const LessonReview = ({
  bgColor,
  title,
  countChallenge,
  countLessonProgress,
  username,
  avatar,
  createdAt,
}: Props) => {
  return (
    <div className="h-80 bg-white w-full sticky top-[80px] rounded-md flex items-center p-4 hidden lg:block">
      <div className="w-full h-full rounded-sm overflow-hidden flex flex-col">
        <div
          className="w-full h-[150px] bg-[#22dd41] flex items-center justify-center rounded-sm"
          style={{
            backgroundColor: bgColor || "#22dd41",
          }}
        >
          <Image
            src={"/logo_quizz.png"}
            alt=""
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <div className="p-2 flex-1 w-full h-full flex flex-col justify-between">
          <div>
            <Badge variant="outline">Quizz</Badge>
          </div>
          <div className="font-[800] w-full line-clamp-1">{title}</div>
          <div className="w-full flex items-center text-sm">
            <div className="flex items-center mr-3">
              <MdOutlineFormatListBulleted className="w-[14px] h-[14px] mr-1" />
              <span className="text-xs leading-3">
                {countChallenge} câu hỏi
              </span>
            </div>
            <div className="mr-3">
              <PiGraduationCap className="text-sm" />
            </div>
            <div>
              <PiBooksLight className="text-sm" />
            </div>
          </div>
          <div className="flex gap-1">
            <span className="text-sm text-slate-500">
              {countLessonProgress} lượt chơi
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full overflow-hidden mr-3">
              <Image
                src={avatar || "/mascot.svg"}
                alt="avatar"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>

            <div className="flex items-center text-xs text-slate-600 gap-1">
              <span>{username}</span>
              <span>*</span>
              <span>4 tháng trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonReview;
