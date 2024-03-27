import { getLessonReport } from "@/action/action-lesson";
import React from "react";
import { FaListUl } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableLesson from "./_components/TableLesson";

const PageReport = async () => {
  const lessons = await getLessonReport();

  return (
    <div className="w-full h-full p-4 lg:p-8 ">
      <div className="flex items-center">
        <FaListUl className="text-slate-500 mr-2" />
        <h1 className="text-base font-bold text-slate-500">Báo cáo</h1>
      </div>
      {/* //todo: bảng */}
      <div className="bg-white mt-4">
        <Table>
          <TableCaption className="border-t mt-0 py-4">
            Thông tin báo các bài học của bạn
          </TableCaption>
          <TableHeader>
            <TableRow className="cursor-pointer">
              <TableHead className="w-[50px]">Stt</TableHead>
              <TableHead className="w-[100px]">Trạng thái</TableHead>
              <TableHead>Tên Quizz</TableHead>
              <TableHead className="w-[150px] text-center">
                Tổng người tham gia
              </TableHead>
              <TableHead className="w-[100px] text-center">Câu đúng</TableHead>
              <TableHead className="w-[100px] text-center">Mã số</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lessons.map((lesson, index) => (
              <TableLesson
                key={lesson.id}
                countLessonProgress={lesson.lessonProgress.length}
                title={lesson.title}
                codeLesson={lesson.slug}
                id={lesson.id}
                lessonProgress={lesson.lessonProgress}
                index={index + 1}
                isPublic={lesson.isPublic}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PageReport;
