"use client";
import React from "react";
import { Button } from "../ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const SidebarCreate = () => {
    
  return (
    <div className="w-full mt-4">
      <Dialog open>
        <DialogTrigger asChild>
          <Button
            variant={"primary"}
            className="w-full justify-center text-xl"
            size={"lg"}
          >
            <IoAddCircleOutline className="w-5 h-5 mr-2 stroke-[5]" />
            Tạo mới
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md w-[80%]">
          <DialogHeader>
            <div className="flex items-center justify-center w-full mb-2">
              <Image src={"/logo.svg"} alt="Mascot" height={80} width={80} />
            </div>
          </DialogHeader>

          <div className="w-full">hihi</div>

          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button variant={"primary"} className="w-full" size={"lg"}>
                Tạo bài quizz
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SidebarCreate;
