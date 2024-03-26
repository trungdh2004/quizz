import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { GrCircleQuestion } from "react-icons/gr";

const ReportLessonId = () => {
  return (
    <div className="p-4 w-full">
      <div className="w-full rounded-lg border overflow-hidden bg-white">
        <div className="p-4 border-b bg-slate-50">
          <h1 className="text-xl font-bold mb-1">Bài 1</h1>
          <p className="text-xs text-slate-400">20-11-2024</p>
        </div>
        <div className="p-4 grid grid-cols-2 lg:grid-cols-4  gap-4">
          <div className="flex-1  p-3 rounded-md border flex items-center">
            <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center">
              <FaBullseye size={16} />
            </div>
            <div className="h-12 ml-2">
              <p className="text-slate-400 text-sm">Câu đúng</p>
              <span className="text-xl font-[900]">10%</span>
            </div>
          </div>
          <div className="flex-1  p-3 rounded-md border flex items-center">
            <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center">
              <FaRegCircleCheck size={16} />
            </div>
            <div className="h-12 ml-2">
              <p className="text-slate-400 text-sm">Câu đúng</p>
              <span className="text-xl font-[900]">10%</span>
            </div>
          </div>
          <div className="flex-1  p-3 rounded-md border flex items-center">
            <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center">
              <LuUsers size={16} />
            </div>
            <div className="h-12 ml-2">
              <p className="text-slate-400 text-sm">Câu đúng</p>
              <span className="text-xl font-[900]">10%</span>
            </div>
          </div>
          <div className="flex-1  p-3 rounded-md border flex items-center">
            <div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center">
              <GrCircleQuestion size={16} />
            </div>
            <div className="h-12 ml-2">
              <p className="text-slate-400 text-sm">Câu đúng</p>
              <span className="text-xl font-[900]">10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* //todo ================= */}
      <div className="p-4 bg-slate-50 rounded-lg mt-4"></div>
    </div>
  );
};

export default ReportLessonId;
