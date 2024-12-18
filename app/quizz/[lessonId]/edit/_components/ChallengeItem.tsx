import { ChallengeOption } from "@prisma/client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  id: string;
  options: ChallengeOption[];
  question: string;
  index: number;
  onDelete: (index: string) => void;
  isDelete: boolean;
  onUpdate: (id: string) => void;
}

const ChallengeItem = ({
  id,
  question,
  options,
  index,
  onDelete,
  isDelete,
  onUpdate,
  
}: Props) => {
  return (
    <div className="w-full rounded bg-white p-4">
      <div className="flex items-center justify-between h-6 mb-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-400">
          {index + 1}
        </div>
        <div className="flex gap-2">
          <div
            className="h-6 px-2 flex items-center border border-slate-300 rounded-sm text-slate-500 text-sm cursor-pointer"
            onClick={() => onUpdate(id)}
          >
            <GoPencil className="lg:mr-2" />
            <span className="hidden lg:block">Chỉnh sửa</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="h-6 px-2 flex items-center border border-slate-300 rounded-sm text-slate-500 text-sm cursor-pointer">
                <MdDeleteOutline className="" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-1 w-auto">
              <div className="p-1">
                <p className="text-rose-500 text-sm">
                  Bạn có chắc chắn muốn xóa không ?
                </p>
                <div className="w-full flex items-center justify-end mt-1">
                  <button
                    className="border text-rose-500 border-rose-500 bg-rose-100 hover:bg-rose-200 text-xs py-1 rounded px-2"
                    onClick={() => onDelete(id)}
                  >
                    {isDelete ? (
                      <AiOutlineLoading3Quarters className="animate-spin" />
                    ) : (
                      "Xóa"
                    )}
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full ">
        <div className="pb-2">
          <p className="text-sm sm:text-base ">{question} ?</p>
        </div>
        <div>
          <div className="text-sm text-slate-400 pb-1">Lựa chọn trả lời</div>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
            {options.map((option) => (
              <div className="w-full flex " key={option.id}>
                {option.correct ? (
                  <FaCheck className="mr-2 text-green-500 w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <AiOutlineClose className="mr-2 text-rose-500 w-3 h-3 sm:w-4 sm:h-4" />
                )}

                <span className="text-sm sm:text-base">{option.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
