import { getLessonByIdAndChallengeAndUserIdAndLessonProgress } from "@/action/action-lesson";
import { redirect } from "next/navigation";
import LessonDetail from "./component/LessonDetail";

const Page = async ({
  params,
}: {
  params: {
    lessonId: string;
  };
}) => {
  const lesson = await getLessonByIdAndChallengeAndUserIdAndLessonProgress(
    params.lessonId
  );

  if (!lesson) {
    redirect("/my-library");
  }

  const challenges = lesson.challenges;
  const user = lesson.userQuizz;
  const countPlayer = lesson.lessonProgress.length;
  const countCorrect = lesson.lessonProgress.reduce((initial, progress) => {
    const correct = progress.challengeProgress.filter((item) => item.completed);
    return initial + correct.length;
  }, 0);

  const countALlProgress = lesson.lessonProgress.reduce((initial, progress) => {
    const correct = progress.challengeProgress;
    return initial + correct.length;
  }, 0);

  const progressCorrect = Math.floor((countCorrect * 100) / countALlProgress);
  return (
    <LessonDetail
      lesson={lesson}
      challenges={challenges}
      user={user}
      progressCorrect={progressCorrect}
      countPlayer={countPlayer}
      port={process.env.NEXT_PORT}
    />
  );
};

export default Page;
