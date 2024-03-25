import { getLessonByIdAndChallenge } from "@/action/action-lesson";
import ListQuiz from "./_components/ListQuiz";
import { redirect } from "next/navigation";

interface Props {
  params: {
    lessonId: string;
  };
}

const PageQuizz = async ({ params }: Props) => {
  const lesson = await getLessonByIdAndChallenge(params.lessonId);

  if (!lesson) {
    redirect("/learn");
  }

  const challenges = lesson.challenges;

  return <ListQuiz initialLesson={lesson} initialChallenges={challenges} />;
};

export default PageQuizz;
