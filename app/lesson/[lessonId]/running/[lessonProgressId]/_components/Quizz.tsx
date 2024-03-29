"use client";
import {
  Challenge,
  ChallengeOption,
  LessonProgress,
  UserQuizz,
} from "@prisma/client";
import React, { useState, useTransition } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChallengeOptionItem from "./ChallengeOption";
import { useAudio } from "react-use";
import { useToggleAudio } from "@/store/use-audio-quizz";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  initialLessonId: string;
  initialChallenges: (Challenge & {
    challengeOption: ChallengeOption[];
  })[];
  initialLessonProgress: LessonProgress;
  code: string;
}

const Quizz = ({
  initialChallenges,
  initialLessonProgress,
  initialLessonId,
  code,
}: Props) => {
  const router = useRouter();
  const { isOpen, onChecked } = useToggleAudio();
  const [correctAudio, _c, correctControls] = useAudio({
    src: "/correct.wav",
    muted: !isOpen,
  });
  const [wrongAudio, _i, wrongControls] = useAudio({
    src: "/wrong_answer.mp3",
  });
  const [pending, startTransition] = useTransition();
  const [lessonId, setLessonId] = useState(initialLessonId);
  const [lessonProgressId] = useState(initialLessonProgress.id);
  const [challenges] = useState(initialChallenges);
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState<"none" | "completed">("none");
  const [selectedOption, setSelectedOption] = useState<string>();
  const [percentage, setPercentage] = useState<number>(0);

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOption ?? [];

  if (!challenge) {
    router.push(`/lesson/${lessonId}/finish/${lessonProgressId}`);
    return;
  }

  const onSelectedOption = async (id: string) => {
    if (status === "completed") return;

    setSelectedOption(id);

    const correctOption = options.find((option) => option.correct);
    if (!correctOption) return;

    if (correctOption.id === id) {
      startTransition(async () => {
        try {
          await axios.post("/api/challengeProgress", {
            lessonProgressId,
            challengeId: challenge.id,
            completed: true,
          });
          setStatus("completed");
          correctControls.play();
          setPercentage((prev) => {
            return prev + 100 / challenges.length;
          });
        } catch (error) {
          console.log("error bên đúng");
        }
      });
    } else {
      startTransition(async () => {
        try {
          await axios.post("/api/challengeProgress", {
            lessonProgressId,
            challengeId: challenge.id,
            completed: false,
          });
          wrongControls.play();
          setStatus("completed");
          setPercentage((prev) => {
            return prev + 100 / challenges.length;
          });
        } catch (error) {
          console.log("error bên sai");
        }
      });
    }
  };

  const onNext = () => {
    setSelectedOption(undefined);
    setStatus("none");
    setActiveIndex(activeIndex + 1);
  };

  return (
    <>
      {correctAudio}
      {wrongAudio}
      <div className="flex flex-col justify-between h-screen w-full">
        <Header
          onAudio={onChecked}
          isAudio={isOpen}
          percentage={percentage}
          code={code}
        />
        <div className="flex-1 w-full p-2 ">
          <div className="h-full bg-[#57575757] rounded-md gap-4 grid grid-rows-2">
            {/* text-challenge */}
            <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-12">
              <h1 className="inline-block text-white font-bold text-xl sm:text-3xl text-center">
                {challenge.question}
              </h1>
            </div>

            {/* challenge Option */}
            <div className="w-full h-full grid grid-row-4 sm:grid-cols-4 py-2 sm:py-4 px-4 lg:px-12 gap-2">
              {options?.map((item, index) => (
                <ChallengeOptionItem
                  key={item.id}
                  text={item.text}
                  id={item.id}
                  onClick={() => {
                    onSelectedOption(item.id);
                  }}
                  selectedOptionId={selectedOption}
                  selected={item.id === selectedOption}
                  status={status}
                  correct={item.correct}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer onClick={onNext} disabled={status !== "completed"} />
      </div>
    </>
  );
};

export default Quizz;
