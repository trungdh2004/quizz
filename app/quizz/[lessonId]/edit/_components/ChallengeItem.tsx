import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const ChallengeItem = () => {
  return (
    <div className="w-full rounded bg-white p-4">
      <div className="flex items-center justify-between h-6 mb-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-400">
          1
        </div>
        <div className="flex gap-2">
          <div className="h-6 px-2 flex items-center border border-slate-300 rounded-sm text-slate-500 text-sm cursor-pointer">
            <GoPencil className="lg:mr-2" />
            <span className="hidden lg:block">Chỉnh sửa</span>
          </div>
          <div className="h-6 px-2 flex items-center border border-slate-300 rounded-sm text-slate-500 text-sm cursor-pointer">
            <MdDeleteOutline className="" />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="pb-2">
          <p className="text-base ">Xin chao các bạn ?</p>
        </div>
        <div>
          <div className="text-sm text-slate-400 pb-1">Lựa chọn trả lời</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="w-full flex items-center">
              <FaCheck className="mr-2 text-green-500" />
              <span>hihi</span>
            </div>
            <div className="w-full flex items-center">
              <FaCheck className="mr-2 text-rose-500" />
              <span>hihi</span>
            </div>
            <div className="w-full flex items-center">
              <IoMdClose className="mr-2 text-rose-500" />
              <span>hihi</span>
            </div>
            <div className="w-full flex items-center">
              <IoMdClose className="mr-2 text-rose-500" />
              <span>hihi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
