"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";
import { LuLoader2 } from "react-icons/lu";

interface Props {
  userId: string | null;
}

const FormCode = ({ userId }: Props) => {
  const router = useRouter();
  const [pending, startTransation] = useTransition();
  const [code, setCode] = useState("");

  const onClick = () => {
    if (!code) return toast.error("Bạn chưa nhập mã code");

    startTransation(async () => {
      try {
        const { data } = await axios.post("/api/lesson/slug", {
          slug: code,
        });

        router.push(`/lesson/${data}`);
        return;
      } catch (error: any) {
        console.log(error);

        toast.error(error.response.data.message);
      }
    });
  };

  return (
    <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-md">
      <Input
        placeholder="Mã code"
        className="border-none outline-none ring-0 active:ring-0 text-base"
        maxLength={7}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button
        variant={"primary"}
        disabled={!userId || !code || pending}
        className="cursor-pointer"
        onClick={onClick}
      >
        {pending ? (
          <LuLoader2 className="w-5 h-5 animate-spin text-white" />
        ) : (
          "Tìm kiếm"
        )}
      </Button>
    </div>
  );
};

export default FormCode;
