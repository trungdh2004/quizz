import React from "react";
import FormName from "./_component/Form";
import ToggleAudio from "./_component/ToggleAudio";
import { getLessonById } from "@/action/action-lesson";
import { redirect } from "next/navigation";

const PageQuizzId = async ({
  params,
}: {
  params: {
    lessonId: string;
  };
}) => {
  const lesson = await getLessonById(params.lessonId);

  if (!lesson) {
    redirect("/learn");
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="space-y-4">
        <div className="p-4 sm:p-6 rounded-md border-b-4 border-r-4 border-slate-600 bg-[#090909] w-[320px] sm:w-[480px] max-w-[480px] ">
          <FormName lessonId={params.lessonId} />
        </div>
        <div className="p-4 sm:p-6 rounded-md border-b-4 border-r-4 border-slate-600 bg-[#090909] w-[320px] sm:w-[480px] max-w-[480px] ">
          <ToggleAudio />
        </div>
      </div>
    </div>
  );
};

export default PageQuizzId;
