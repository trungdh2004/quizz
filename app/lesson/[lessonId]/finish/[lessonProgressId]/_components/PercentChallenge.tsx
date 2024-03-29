"use client";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  percent: number;
}

const PercentChallenge = ({ percent }: Props) => {
  return (
    <div className="text-start w-full bg-[#ffffff10] p-2 rounded-md pb-4">
      <p className="text-slate-500 font-bold max-sm:text-sm">Câu đúng</p>
      <div className="w-full mt-2 relative flex items-center">
        <Progress value={percent} className="bg-rose-500" />
        <div
          className="p-1.5 py-1 text-sm bg-white absolute rounded-sm transform -translate-x-1/2 max-sm:text-xs "
          style={{
            left: `${percent}%`,
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default PercentChallenge;
