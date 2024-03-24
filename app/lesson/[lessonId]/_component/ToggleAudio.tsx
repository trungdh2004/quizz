"use client";
import { Switch } from "@/components/ui/switch";
import { useToggleAudio } from "@/store/use-audio-quizz";
import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";

const ToggleAudio = () => {
  const { isOpen, onChecked } = useToggleAudio();

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-slate-400 text-sm leading-none font-semibold">
        Cài đặt
      </p>

      <div className="w-full p-6 flex items-center justify-between bg-slate-400/10 rounded-md">
        <p className="text-base text-white flex items-center gap-2">
          <HiSpeakerWave size={18} />
          Hiệu ứng âm thanh
        </p>
        <Switch checked={isOpen} onCheckedChange={onChecked} />
      </div>
    </div>
  );
};

export default ToggleAudio;
