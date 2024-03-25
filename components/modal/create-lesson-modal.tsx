"use client";
import { useExitModal } from "@/store/use-exit-modal";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import { useCreateLessonModal } from "@/store/use-create-lesson-modal";

const CreateLessonModal = () => {
  const { isOpen, open, close } = useCreateLessonModal();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-2xl">
            Tạo câu hỏi
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              onClick={close}
            >
              Tiếp tục
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size={"lg"}
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Thoát
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLessonModal;
