"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiBooksLight, PiGraduationCap } from "react-icons/pi";

import { FaEllipsisVertical } from "react-icons/fa6";
import { formatDistance } from "date-fns";
import { vi } from "date-fns/locale";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  bgColor: string | null;
  countChallenge: number;
  username: string;
  avatar: string;
  createdAt: any;
  id: string;
}

const LessonItem = ({
  title,
  bgColor,
  countChallenge,
  username,
  avatar,
  createdAt,
  id,
}: Props) => {
  const router = useRouter();

  const onCLick = (id: string) => {
    router.push(`/my-library/${id}`);
  };

  return (
    <div
      className="w-full p-2 rounded-md flex bg-white h-auto hover:bg-[#f9f9f9] cursor-pointer border"
      onClick={() => onCLick(id)}
    >
      <div>
        <div
          className="w-20 h-20 sm:w-[110px] sm:h-[110px] bg-sky-500 flex items-center justify-center rounded-sm"
          style={{
            backgroundColor: bgColor || "#0ea5e9",
          }}
        >
          <Image src="/logo_quizz.png" alt="lesson" width={60} height={60} />
        </div>
      </div>
      <div className="w-full ml-2 flex-1 flex justify-between">
        <div className=" flex-1 w-full flex flex-col justify-between">
          <div>
            <Badge variant="outline" className="py-0.5 text-[10px]">
              Quiz
            </Badge>
          </div>
          <div className="w-full">
            <h1 className="font-[800] w-full line-clamp-1">{title}</h1>
          </div>
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
              <span>
                {formatDistance(new Date(), createdAt, {
                  locale: vi,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
