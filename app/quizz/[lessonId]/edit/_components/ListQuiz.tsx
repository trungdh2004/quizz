"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiBooksLight, PiGraduationCap } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import React, { useState } from "react";
import FormAdd from "./FormAdd";
import ChallengeItem from "./ChallengeItem";
import { Challenge, Lesson, ChallengeOption } from "@prisma/client";

interface Props {
  initialLesson: Lesson;
  initialChallenges: (Challenge & {
    challengeOption: ChallengeOption[];
  })[];
}

const ListQuiz = ({ initialChallenges, initialLesson }: Props) => {
  const [open, setOpen] = useState(false);
  const [lesson] = useState(initialLesson);
  const [challenges, setchallenges] = useState(initialChallenges);

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormAdd
        open={open}
        setOpen={() => {
          setOpen(false);
        }}
        lessonId={lesson.id}
      />
      <div className="w-full min-h-screen bg-[#f2f2f2]">
        {/* header */}
        <div className="h-[56px] w-full border-b bg-white flex px-4 items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
            <Button className="text-black mr-4" size={"sm"}>
              <FaAngleLeft className="w-6 h-6" />
            </Button>

            <h3 className="font-bold hidden lg:block">{lesson.title}</h3>
          </div>
          <div>
            <Button variant={"secondary"}>Xuất bản</Button>
          </div>
        </div>
        {/* body */}

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-[9fr,3fr] gap-4 py-6 relative">
          <div className="h-[1000px]  w-full space-y-4">
            {/*// todo: thay dổi title */}
            <div className="w-full p-4 bg-white rounded-md">
              <div className="mb-2">
                <h1 className="text-base font-semibold text-slate-500">
                  Tên bài quizz
                </h1>
              </div>
              <div className="w-full h-[50px] bg-white border rounded-md px-4 py-2 flex items-center">
                <input
                  type="text"
                  className="flex-1 h-full border-none outline-none"
                  value={lesson.title}
                />
                <Button>Thay đổi</Button>
              </div>
            </div>

            {/*// todo: Thêm câu hỏi */}
            <div className="py-2  px-4 lg:px-0 flex items-center justify-between">
              <div className="flex items-center ">
                <FaRegQuestionCircle className="mr-2 w-6 h-6" />
                <h1 className="text-xl font-bold">1 câu hỏi</h1>
              </div>
              <div>
                <Button variant={"secondaryOutline"} onClick={onOpen}>
                  Thêm câu hỏi
                </Button>
              </div>
            </div>

            {/* //todo cau hoi */}
            <ChallengeItem />
            <ChallengeItem />
            <ChallengeItem />

            <div className="py-2 flex justify-center">
              <Button variant={"secondaryOutline"} onClick={onOpen}>
                Thêm câu hỏi
              </Button>
            </div>
          </div>

          {/* //todo bên phải ================================ */}
          <div className="h-80 bg-white w-full sticky top-[80px] rounded-md flex items-center p-4">
            <div className="w-full h-full rounded-sm overflow-hidden flex flex-col">
              <div className="w-full h-[150px] bg-[#22dd41] flex items-center justify-center rounded-sm">
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
                <div className="font-[800] w-full line-clamp-1">Bài học 1</div>
                <div className="w-full flex items-center text-sm">
                  <div className="flex items-center mr-3">
                    <MdOutlineFormatListBulleted className="w-[14px] h-[14px] mr-1" />
                    <span className="text-xs leading-3">20 câu hỏi</span>
                  </div>
                  <div className="mr-3">
                    <PiGraduationCap className="text-sm" />
                  </div>
                  <div>
                    <PiBooksLight className="text-sm" />
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="text-sm text-slate-500">0 lượt chơi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-3">
                    <Image
                      src={"/mascot.svg"}
                      alt="avatar"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center text-xs text-slate-600 gap-1">
                    <span>Dh Trung</span>
                    <span>*</span>
                    <span>4 tháng trước</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListQuiz;
