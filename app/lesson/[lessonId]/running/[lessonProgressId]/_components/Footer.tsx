import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({ onClick, disabled }: Props) => {
  return (
    <div className="h-16 px-2 border-t bg-black flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <Image
            src={"/mascot.svg"}
            alt=""
            width={50}
            height={50}
            className="object-cover mr-4"
          />
        </div>

        <div className="relative flex items-center">
          <div className="px-4 py-2 rounded-md bg-[#ffffff24] text-white text-[18px] font-semibold">
            Hello Đô Hữu Trung
          </div>

          <div className="absolute border-y-8 border-r-8 border-y-transparent border-r-[#ffffff24] -left-2"></div>
        </div>
      </div>
      <div>
        <Button
          variant={"secondary"}
          className="px-8"
          onClick={onClick}
          disabled={disabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Footer;
