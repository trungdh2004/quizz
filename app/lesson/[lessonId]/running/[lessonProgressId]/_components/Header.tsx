import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { MdClose } from "react-icons/md";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import { useExitModal } from "@/store/use-exit-modal";

interface Props {
  onAudio: () => void;
  isAudio: boolean;
  percentage: number;
  code: string;
}

const Header = ({ onAudio, isAudio, percentage, code }: Props) => {
  const { open } = useExitModal();

  return (
    <div className="h-14 w-full border-b backdrop-blur-lg px-2 flex items-center justify-between ">
      <div>
        <Button variant={"dangerOutline"} onClick={open}>
          <MdClose className="w-6 h-6" />
        </Button>
      </div>
      <div className="w-[50%]">
        <Progress value={percentage} className="w-full" />
      </div>
      <div className="hidden sm:flex gap-2">
        <Button onClick={onAudio}>
          {isAudio ? (
            <HiSpeakerWave className="w-5 h-5" />
          ) : (
            <HiSpeakerXMark className="w-5 h-5" />
          )}
        </Button>
        <div className="px-2.5 py-1.5 rounded-md text-xl font-semibold text-green-500 bg-[#ffffff1a]">
          {code}
        </div>
      </div>
    </div>
  );
};

export default Header;
