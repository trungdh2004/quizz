import { getLessonProgressById } from "@/action/action-lessonProgress";
import { redirect } from "next/navigation";
import React from "react";
import PercentChallenge from "./_components/PercentChallenge";

import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConfettiPage from "./_components/Confetti";

interface Props {
  params: {
    lessonId: string;
    lessonProgressId: string;
  };
}

const FinishPage = async ({ params }: Props) => {
  const { lessonId, lessonProgressId } = params;

  const getLessonProgress = getLessonProgressById(lessonProgressId);

  const [lessonProgressData] = await Promise.all([getLessonProgress]);

  if (!lessonProgressData) {
    redirect("/learn");
  }

  const countChallenge = lessonProgressData?.challengeProgress.length;
  const countCompletedChallenge = lessonProgressData.challengeProgress.filter(
    (item) => item.completed
  );

  const percentChallenge =
    Math.floor((countCompletedChallenge.length / countChallenge) * 100) || 0;

  return (
    <div className="w-full h-full flex items-center justify-center relative flex-col gap-2 px-2">
      <ConfettiPage />
      <div className="p-4 sm:p-6 rounded-md border-b-4 border-r-4 border-slate-600 bg-[#090909] w-full sm:w-[480px] max-w-[480px] text-center space-y-3">
        <h1 className="text-xl font-semibold text-white max-sm:text-base">
          Chúc mừng bạn đã hoàn thành bài học <br />
          hãy tiếp tục phát huy
        </h1>

        <PercentChallenge percent={percentChallenge} />

        <div className="pt-4 text-start">
          <p className="text-slate-500 font-bold px-2 max-sm:text-sm">
            Số liệu thông kê
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="w-full h-[72px] p-2 rounded-md bg-[#ffffff10] flex flex-col items-center justify-center relative">
              <span className="text-2xl text-green-500 font-bold">
                {countCompletedChallenge.length}
              </span>
              <p className="text-base text-slate-500 max-sm:text-sm">
                Số câu đúng
              </p>

              <div className="absolute left-3 hidden sm:block">
                <IoIosCheckmarkCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="w-full h-[72px] p-2 rounded-md bg-[#ffffff10] flex flex-col items-center justify-center  relative">
              <span className="text-2xl text-rose-500 font-bold">
                {countChallenge - countCompletedChallenge.length}
              </span>
              <p className="text-base text-slate-500 max-sm:text-sm">
                Số câu sai
              </p>
              <div className="absolute left-3 hidden sm:block">
                <IoIosCloseCircle className="w-8 h-8 text-rose-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex pt-4">
          <Button className="w-full text-xl h-12" variant={"secondary"} asChild>
            <Link href={"/learn"}>Trở về</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
