import { Badge } from "@/components/ui/badge";

import { FaEllipsisVertical } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { PiBooksLight } from "react-icons/pi";
import { Challenge, Lesson, UserQuizz } from "@prisma/client";
import LessonItem from "./LessonItem";

interface Props {
  lessons: (Lesson & {
    challenges: Challenge[];
    userQuizz: UserQuizz;
  })[];
}

export function TabShowLesson({ lessons }: Props) {
  const lessonPublic = lessons.filter((lesson) => lesson.isPublic);
  const lessonNotPublic = lessons.filter((lesson) => !lesson.isPublic);

  return (
    <Tabs defaultValue="publish" className="w-full">
      <TabsList className="grid grid-cols-2 max-w-[480px] border">
        <TabsTrigger value="publish">Xuất bản</TabsTrigger>
        <TabsTrigger value="draft">Chưa xuất bản</TabsTrigger>
      </TabsList>
      <TabsContent value="publish">
        <div className="w-full flex flex-col gap-2">
          {lessonPublic?.map((item) => (
            <LessonItem
              key={item.id}
              title={item.title}
              countChallenge={item.challenges.length}
              username={item.userQuizz.username}
              createdAt={item.createdAt}
              id={item.id}
              bgColor={item.imageSrc}
              avatar={item.userQuizz.imageSrc}
            />
          ))}
          {lessonPublic.length === 0 && (
            <div className="w-full h-[100px] border rounded-sm bg-white flex items-center justify-center">
              Không có bài học nào
            </div>
          )}
        </div>
      </TabsContent>
      <TabsContent value="draft">
        <div className="w-full flex flex-col gap-2">
          {lessonNotPublic?.map((item) => (
            <LessonItem
              key={item.id}
              title={item.title}
              countChallenge={item.challenges.length}
              username={item.userQuizz.username}
              createdAt={item.createdAt}
              id={item.id}
              bgColor={item.imageSrc}
              avatar={item.userQuizz.imageSrc}
            />
          ))}

          {lessonNotPublic.length === 0 && (
            <div className="w-full h-[100px] border rounded-sm bg-white flex items-center justify-center">
              Không có bài học nào
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
