import { getLessonByIdAndChallenge } from "@/action/action-lesson";
import { getLessonProgressById } from "@/action/action-lessonProgress";
import React from "react";
import Quizz from "./_components/Quizz";
import { redirect } from "next/navigation";

interface Props {
  params: {
    lessonId: string;
    lessonProgressId: string;
  };
}

const PageLessonProgressId = async ({ params }: Props) => {
  const { lessonId, lessonProgressId } = params;

  const getLessonProgress = getLessonProgressById(lessonProgressId);
  const getLesson = getLessonByIdAndChallenge(lessonId);

  const [lessonProgressData, lessonData] = await Promise.all([
    getLessonProgress,
    getLesson,
  ]);

  if (!lessonProgressData || !lessonData) {
    redirect("/learn");
  }

  return (
    <Quizz
      initialLessonId={lessonData.id}
      initialChallenges={lessonData.challenges}
      initialLessonProgress={lessonProgressData}
    />
  );
};

export default PageLessonProgressId;
