"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { useTransition } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoCopy } from "react-icons/go";
import { PiGraduationCap } from "react-icons/pi";
import { BiCaretRightCircle } from "react-icons/bi";
import { BiBullseye } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import ToolipAction from "@/components/ToolipAction";
import { Challenge, ChallengeOption, Lesson, UserQuizz } from "@prisma/client";
import ChallengeItem from "./ChallengeItem";
import { toast } from "sonner";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  lesson: Lesson;
  challenges: (Challenge & {
    challengeOption: ChallengeOption[];
  })[];
  user: UserQuizz;
  progressCorrect: number;
  countPlayer: number;
  port?: string;
}

const LessonDetail = ({
  lesson,
  challenges,
  user,
  progressCorrect,
  countPlayer,
  port,
}: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onCopyLink = (id: string) => {
    navigator.clipboard.writeText(`${location.origin}/lesson/${id}`);
    toast.success("Đã copy link");
  };

  const onDelete = (id: string) => {
    startTransition(async () => {
      try {
        const { data } = await axios.delete(`/api/lesson/${id}`);

        toast.success("Xóa thành công");
        router.push("/learn");
      } catch (error) {
        toast.error("Lỗi không xóa được");
      }
    });
  };

  return (
    <div className="max-w-screen-md mx-auto ">
      <div className="w-full border mt-6 bg-white flex flex-col p-4 rounded-sm">
        <div className="w-full flex items-start">
          <div
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] bg-green-500 rounded-sm  flex items-center justify-center"
            style={{
              backgroundColor: lesson.imageSrc || "",
            }}
          >
            <Image src={"/logo_quizz.png"} alt="logo" width={60} height={60} />
          </div>
          <div className="flex-1 flex flex-col px-2 justify-between h-[80px] sm:h-[120px] ">
            <div className="hidden sm:block">
              <Badge>Quizz</Badge>
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold line-clamp-1">
                {lesson.title}
              </h2>
            </div>
            <div className="hidden sm:flex items-center">
              <PiGraduationCap className="text-slate-400 mr-2" />
              <span className="text-xs font-normal  text-slate-400">
                University
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="flex items-center">
                <BiBullseye className="text-slate-400 mr-2" />
                <span className="text-xs font-normal text-slate-400">
                  {Number.isNaN(progressCorrect) ? 0 : progressCorrect}% độ
                  chính xác
                </span>
              </div>

              <div className="flex items-center">
                <BiCaretRightCircle className="text-slate-400 mr-2" />
                <span className="text-xs font-normal  text-slate-400">
                  {countPlayer} lần chơi
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-1">
            <ToolipAction lable="Copy link" side="top">
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center border border-slate-100 text-black cursor-pointer"
                onClick={() => onCopyLink(lesson.id)}
              >
                <GoCopy />
              </div>
            </ToolipAction>
            <Popover>
              <PopoverTrigger asChild>
                <div className="w-6 h-6 rounded-sm flex items-center justify-center border border-slate-100 text-black cursor-pointer">
                  <MdDeleteOutline />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-1 w-auto">
                <div className="p-1">
                  <p className="text-rose-500 text-sm">
                    Bạn có chắc chắn muốn xóa không ?
                  </p>
                  <div className="w-full flex items-center justify-end mt-1">
                    <button
                      className="border text-rose-500 border-rose-500 bg-rose-100 hover:bg-rose-200 text-xs py-1 rounded px-2"
                      onClick={() => onDelete(lesson.id)}
                    >
                      {pending ? (
                        <AiOutlineLoading3Quarters className="animate-spin" />
                      ) : (
                        "Xóa"
                      )}
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="w-full mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={user.imageSrc || "/mascot.svg"}
              alt="avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            ></Image>
            <span className="text-sm font-medium">{user.username}</span>
          </div>

          <Link href={`/quizz/${lesson.id}/edit`}>
            <div className="h-8 px-3 flex items-center justify-center border rounded-sm text-sm text-black bg-[#0909090d] cursor-pointer">
              <FaRegEdit className="mr-2 w-5 h-5 text-black" />
              Chỉnh sửa
            </div>
          </Link>
        </div>
      </div>

      {/* body */}
      <div className="mt-7 mb-4 flex items-center">
        <FaListCheck className="w-4 h-4 text-slate-400 mr-2" />
        <span className="text-slate-400 text-base font-medium">
          {challenges.length} Câu hỏi
        </span>
      </div>

      {/* list challenge */}

      <div>
        {challenges.map((challenge) => (
          <ChallengeItem
            key={challenge.id}
            question={challenge.question}
            options={challenge.challengeOption}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonDetail;
