"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

interface Props {
  isLogin: boolean;
}

const BannerLeft = ({ isLogin }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (userId) {
      (async () => {
        try {
          await axios.post("/api/userQuizz");
        } catch (error) {
          toast.error("Lôi server không thể truy cập");
        }
      })();
    }
  }, [userId]);

  if (!isLoading) {
    return (
      <div className=" w-full lg:w-[50%]">
        <Skeleton className="bg-slate-100 rounded-md w-full h-20"></Skeleton>
        <Skeleton className="bg-slate-100 rounded-md w-full h-20 mt-4"></Skeleton>
        <Skeleton className="bg-slate-100 rounded-md w-[100px] h-12 mt-4"></Skeleton>
      </div>
    );
  }
  return (
    <div className="w-full lg:w-[50%] x x flex flex-col justify-start gap-y-4 sm:gap-y-8 h-full">
      <h1 className="text-[30px] sm:text-[55px] font-bold text-start">
        <span className="text-[45px] sm:text-[70px]">Q</span>uizz
      </h1>
      <div>
        <h4 className="text-xl sm:text-3xl font-semibold">
          Trang web cung cấp các bài tập <br />{" "}
          <p className="text-center flex justify-start">
            <span className="mr-1">môn </span>
            <Typewriter
              options={{
                strings: [
                  "lập trình web",
                  "chính trị",
                  "tiếng anh",
                  "toán cao cấp",
                  "văn học",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </h4>
      </div>
      <div>
        <SignedIn>
          <Button variant={"primary"} asChild>
            <Link href={"/learn"}>Học ngay</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" afterSignInUrl="/">
            <Button variant={"primary"}>Đăng nhập</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default BannerLeft;
