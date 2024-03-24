import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  id: string;
  onClick: () => void;
  selected: boolean;
  status: "none" | "completed";
  correct: boolean;
  selectedOptionId?: string;
}

const ChallengeOptionItem = ({
  text,
  onClick,
  selected,
  status,
  correct,
  selectedOptionId,
}: Props) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-sky-500 border-b-4 sm:border-b-[6px] border-2 cursor-pointer border-sky-600 border-b-sky-600 rounded-md active:border-b-2 flex items-center justify-center lg:px-2 relative overflow-hidden",
        selected &&
          status === "none" &&
          "bg-green-500 border-green-600 border-b-green-600",

        status === "completed" &&
          correct &&
          "bg-green-500 border-green-600 border-b-green-600",
        status === "completed" &&
          !correct &&
          "bg-rose-500 border-rose-600 border-b-rose-600"
      )}
      onClick={
        status === "none" && !selectedOptionId
          ? onClick
          : () => {
              console.log("khong dc");
            }
      }
    >
      <p className="text-sm sm:text-xl lg:text-2xl font-bold text-center leading-4 sm:leading-5 lg:leading-7 text-white">
        {text}
      </p>
    </div>
  );
};

export default ChallengeOptionItem;
