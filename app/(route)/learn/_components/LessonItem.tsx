import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

interface Props {
  title: string;
  imageSrc: string | null;
  countChallenge: number;
  countPlay: number;
  id: string;
}

const LessonItem = ({
  id,
  title,
  imageSrc,
  countChallenge,
  countPlay,
}: Props) => {
  return (
    <Link href={`/lesson/${id}`}>
      <div className="w-full rounded-md border overflow-hidden border-slate-200  cursor-pointer border-b-4 active:border-b bg-white">
        <div className="w-full h-40 bg-sky-500 flex items-center justify-center">
          <Image
            src={"/logo_quizz.png"}
            alt="logoQuizz"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="p-2 flex flex-col gap-y-1">
          <div>
            <Badge variant="outline">Quizz</Badge>
          </div>
          <div className="mt-2 my-4 text-base font-semibold">{title}</div>

          <div className="flex gap-1 items-center">
            <span className="text-slate-500 font-semibold text-sm leading-4">
              {countChallenge} câu hỏi
            </span>
            <GoDotFill className="w-2 h-2 text-slate-500" />
            <span className="text-slate-500 font-semibold text-sm leading-4">
              {countPlay} lần chơi
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonItem;
