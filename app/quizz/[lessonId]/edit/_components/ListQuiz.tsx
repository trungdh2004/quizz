"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiBooksLight, PiGraduationCap } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import React, { useState, useTransition } from "react";
import FormAdd from "./FormAdd";
import ChallengeItem from "./ChallengeItem";
import {
  Challenge,
  Lesson,
  ChallengeOption,
  UserQuizz,
  LessonProgress,
} from "@prisma/client";
import LessonReview from "./LessonReview";
import { toast } from "sonner";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FormUpdate from "./FormUpdate";

type IChallenge = Challenge & {
  challengeOption: ChallengeOption[];
};

interface Props {
  initialLesson: Lesson & {
    userQuizz: UserQuizz;
    lessonProgress: LessonProgress[];
  };
  initialChallenges: IChallenge[];
}

interface UpdateChallenge {
  question: string;
  options: {
    [key: string]: string;
  };
  correct: string;
  id: string;
  optionId: string[];
}

type IOptions = {
  [key: string]: string;
};

const ListQuiz = ({ initialChallenges, initialLesson }: Props) => {
  const [isDelete, startTransitionDelete] = useTransition();
  const [isTitle, startTransitionTitle] = useTransition();
  const [open, setOpen] = useState(false);
  const [lesson] = useState(initialLesson);
  const [title, setTitle] = useState(initialLesson.title);
  const [updateTitle, setUpdateTitle] = useState(initialLesson.title);
  const [challenges, setchallenges] = useState<IChallenge[]>(initialChallenges);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  // update challenge
  const [stateUpdate, setStateUpdate] = useState<UpdateChallenge>({
    question: "",
    options: {
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    },
    correct: "",
    id: "",
    optionId: [],
  });

  const onOpen = () => {
    setOpen(true);
  };

  const onDelete = (id: string) => {
    startTransitionDelete(async () => {
      try {
        const { data } = await axios.delete(`/api/challenge/${id}`);

        const newChallenge = challenges.filter(
          (challenge) => challenge.id !== data?.id
        );

        setchallenges(newChallenge);
      } catch (error) {
        console.log(error);
        toast.error("Xóa thất bại");
      }
    });
  };

  const openUpdateChallenge = (id: string) => {
    const challenge = challenges.find((item) => item.id === id);

    const question = challenge?.question || "";

    const challengeOptions = challenge?.challengeOption;
    const options: IOptions = {
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    };
    const optionId: string[] = [];
    let correct = "";
    challengeOptions?.filter((item, index) => {
      const key = `option${index + 1}`;
      options[key] = item.text;
      if (item.correct) correct = `option${index + 1}`;
      optionId.push(item.id);
    });
    setStateUpdate({
      question: question,
      options: options,
      correct: correct,
      id,
      optionId: optionId,
    });
    setIsOpenUpdate(true);
  };

  const handleUpdateTitle = () => {
    startTransitionTitle(async () => {
      try {
        const { data } = await axios.put(`/api/lesson/${lesson.id}`, {
          title: updateTitle,
        });
        if (!data) toast.error("cập nhật thất bại");
        setTitle(data.title);
        toast.success("Cập nhập thành công");
      } catch (error) {
        toast.error("cập nhật thất bại");
      }
    });
  };

  const handleUpadteChallenge = (value: IChallenge) => {
    const updateChallenges = challenges.map((challenge) => {
      return challenge.id === value.id ? value : challenge;
    });
    setchallenges(updateChallenges);
  };

  return (
    <>
      <FormAdd
        open={open}
        setOpen={() => {
          setOpen(false);
        }}
        lessonId={lesson.id}
        setChallenges={(value: IChallenge) => {
          setchallenges((prev) => {
            return [...prev, value];
          });
        }}
      />

      {/* form update */}
      {isOpenUpdate && (
        <FormUpdate
          open={isOpenUpdate}
          setOpen={() => {
            setIsOpenUpdate(false);
          }}
          lessonId={lesson.id}
          setChallenges={handleUpadteChallenge}
          initialChallengeUpdate={stateUpdate}
        />
      )}

      <div className="w-full min-h-screen bg-[#f2f2f2]">
        {/* header */}
        <div className="h-[56px] w-full border-b bg-white flex px-4 items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
            <Button className="text-black mr-4" size={"sm"}>
              <FaAngleLeft className="w-6 h-6" />
            </Button>

            <h3 className="font-bold hidden lg:block">{title}</h3>
          </div>
          <div>
            <Button variant={"secondary"}>Xuất bản</Button>
          </div>
        </div>
        {/* body */}

        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-[9fr,3fr] gap-4 py-6 relative">
          <div className="h-auto  w-full space-y-4">
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
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <Button
                  onClick={handleUpdateTitle}
                  disabled={!updateTitle || title === updateTitle || isTitle}
                >
                  {" "}
                  {isTitle ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    "Thay đổi"
                  )}
                </Button>
              </div>
            </div>

            {/*// todo: Thêm câu hỏi */}
            <div className="py-2  px-4 lg:px-0 flex items-center justify-between">
              <div className="flex items-center ">
                <FaRegQuestionCircle className="mr-2 w-6 h-6" />
                <h1 className="text-xl font-bold">
                  {challenges.length} câu hỏi
                </h1>
              </div>
              <div>
                <Button variant={"secondaryOutline"} onClick={onOpen}>
                  Thêm câu hỏi
                </Button>
              </div>
            </div>

            {/* //todo cau hoi */}
            {challenges.map((challenge, index) => (
              <ChallengeItem
                key={challenge.id}
                id={challenge.id}
                options={challenge.challengeOption}
                question={challenge.question}
                index={index}
                onDelete={onDelete}
                isDelete={isDelete}
                onUpdate={openUpdateChallenge}
              />
            ))}

            <div className="py-2 flex justify-center mt-4">
              <Button variant={"secondaryOutline"} onClick={onOpen}>
                Thêm câu hỏi
              </Button>
            </div>
          </div>

          {/* //todo bên phải ================================ */}
          <LessonReview
            title={title}
            countChallenge={challenges.length}
            countLessonProgress={lesson.lessonProgress.length}
            bgColor={lesson.imageSrc || ""}
            username={lesson.userQuizz.username}
            avatar={lesson.userQuizz.imageSrc}
          />
        </div>
      </div>
    </>
  );
};

export default ListQuiz;
