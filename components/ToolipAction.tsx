import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ToolipAction = ({
  children,
  lable,
  side = "left",
}: {
  children: ReactNode;
  lable: string;
  side?: "top" | "bottom" | "left" | "right";
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{lable}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolipAction;
