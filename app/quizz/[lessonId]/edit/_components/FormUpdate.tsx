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
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useState, useTransition } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Challenge, ChallengeOption } from "@prisma/client";

type IChallenge = Challenge & {
  challengeOption: ChallengeOption[];
};

interface Props {
  open: boolean;
  setOpen: () => void;
  lessonId: string;
  setChallenges: (value: IChallenge) => void;
  initialChallengeUpdate: any;
}

interface optionProp {
  [key: string]: string;
}

const FormUpdate = ({
  open,
  setOpen,
  lessonId,
  setChallenges,
  initialChallengeUpdate,
}: Props) => {
  const [pending, startTransition] = useTransition();
  const [question, setQuestion] = useState(initialChallengeUpdate.question);
  const [challengeOptions, setChallengeOptions] = useState<optionProp>(
    initialChallengeUpdate.options
  );
  const [correct, setCorrect] = useState(initialChallengeUpdate.correct);

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
    startTransition(async () => {
      try {
        const { data } = await axios.put(
          `/api/challenge/${initialChallengeUpdate.id}`,
          {
            question,
            options,
            lessonId: lessonId,
            optionId: initialChallengeUpdate.optionId,
          }
        );
        setChallenges(data);
        setQuestion("");
        setCorrect("");
        setChallengeOptions({
          option1: "",
          option2: "",
          option3: "",
          option4: "",
        });
        toast.success("Tạo thành công");
        setOpen();
      } catch (error: any) {
        const err = await error;
        console.log(err.response.data.message);

        toast.error(err.response.data.message);
      }
    });
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
            Thay đổi câu hỏi
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
              defaultValue={correct}
            >
              {Array.from([1, 2, 3, 4]).map((item) => (
                <div className="flex items-center gap-1 w-full" key={item}>
                  <div>
                    <RadioGroupItem value={`option${item}`} />
                  </div>
                  <div className="flex-1">
                    <textarea
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
              disabled={!isSubmit && !pending}
              onClick={onSubmit}
            >
              {pending ? (
                <AiOutlineLoading3Quarters className="animate-spin text-white " />
              ) : (
                "Thay đổi"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormUpdate;
