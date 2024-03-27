import { cn } from "@/lib/utils";
import { ChallengeOption } from "@prisma/client";
import React from "react";

interface Props {
  question: string;
  options: ChallengeOption[];
}

const ChallengeItem = ({ question, options }: Props) => {
  return (
    <div className="mb-4 p-4 rounded-md bg-white space-y-2">
      <div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs from-muted-foreground">
        1
      </div>
      <div className="text-sm font-medium">{question} ?</div>
      <div className="px-2 flex items-center">
        <span className="text-xs mr-2 text-muted-foreground">
          Lựa chọn trả lời
        </span>
        <p className="flex-1 w-full border-[0.5px] "></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <div className="w-full flex items-start" key={option.id}>
            <div
              className={cn(
                "w-4 h-4 rounded-full   mr-2",
                option.correct ? "bg-green-500" : "bg-rose-500"
              )}
            ></div>
            <div className="flex-1 w-full text-sm">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeItem;
