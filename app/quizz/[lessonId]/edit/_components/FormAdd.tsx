"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Props {
  open: boolean;
  setOpen: () => void;
  lessonId: string;
}

interface optionProp {
  [key: string]: string;
}

const FormAdd = ({ open, setOpen, lessonId }: Props) => {
  const [question, setQuestion] = useState("");
  const [challengeOptions, setChallengeOptions] = useState<optionProp>({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [correct, setCorrect] = useState("");

  const onChangeQuestion = (value: string) => {
    setQuestion(value);
  };

  const onChangeOption = (value: string, key: string) => {
    setChallengeOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onChangeOptionRadio = (value: string) => {
    setCorrect(value);
  };

  const onSubmit = async () => {
    const options = Object.entries(challengeOptions).map((item) => {
      return {
        text: item[1],
        correct: item[0] === correct,
      };
    });

    try {
      const { data } = await axios.post("/api/challenge", {
        question,
        options,
        lessonId: lessonId,
      });

      setQuestion("");
      setCorrect("");
      setChallengeOptions({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });
      toast.error("Tạo thành công");
      setOpen();
    } catch (error: any) {
      const err = await error;
      console.log(err.response.data.message);

      toast.error(err.response.data.message);
    }
  };

  const isSubmit: boolean =
    !!correct &&
    Object.entries(challengeOptions).every((item) => item[1] !== "") &&
    !!question;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-2xl">
            Tạo câu hỏi
          </DialogTitle>
        </DialogHeader>

        <div className="w-full py-1 space-y-1">
          <div>
            <p className="text-sm text-slate-500">Câu hỏi</p>
            <textarea
              autoFocus
              onChange={(e) => onChangeQuestion(e.target.value)}
              value={question}
              className="w-full h-[70px] text-sm border rounded-md p-1 outline-none resize-none"
              placeholder="Nhập câu hỏi...."
            />
          </div>

          <div className="">
            <span className="text-xs text-slate-500">Câu trả lời</span>
          </div>

          <div>
            <RadioGroup
              onValueChange={(value: string) => {
                onChangeOptionRadio(value);
              }}
            >
              {Array.from([1, 2, 3, 4]).map((item) => (
                <div className="flex items-center gap-1 w-full" key={item}>
                  <div>
                    <RadioGroupItem value={`option${item}`} />
                  </div>
                  <div className="flex-1">
                    <textarea
                      autoFocus
                      onChange={(e) =>
                        onChangeOption(e.target.value, `option${item}`)
                      }
                      value={challengeOptions[`option${item}`]}
                      className="w-full h-[50px] text-sm border rounded-md p-1 outline-none resize-none"
                    />
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              disabled={!isSubmit}
              onClick={onSubmit}
            >
              Tiếp tục
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormAdd;
