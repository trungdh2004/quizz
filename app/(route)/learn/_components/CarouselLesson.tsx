import React from "react";
import LessonItem from "./LessonItem";
import { Challenge, Lesson, LessonProgress } from "@prisma/client";

interface Props {
  lessonSystems: (Lesson & {
    challenges: Challenge[];
    lessonProgress: LessonProgress[];
  })[];
}

const CarouselLesson = ({ lessonSystems }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
      {lessonSystems.map((lessonSystem) => (
        <LessonItem
          key={lessonSystem.id}
          title={lessonSystem.title}
          imageSrc={lessonSystem?.imageSrc}
          countChallenge={lessonSystem.challenges.length}
          countPlay={lessonSystem.lessonProgress.length}
        />
      ))}
    </div>
  );
};

export default CarouselLesson;
