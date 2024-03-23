"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import axios from "axios";

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
        console.log("test user");

        await axios.post("/api/userQuizz");
      })();
    }
  }, [userId]);

  if (!isLoading) {
    return (
      <Skeleton className="bg-slate-100 w-full lg:w-[50%] rounded-md h-[300px]" />
    );
  }
  return (
    <div className="w-full lg:w-[50%] x x flex flex-col justify-start gap-y-8 h-full">
      <h1 className="text-[55px] font-bold text-start">
        <span className="text-[70px]">Q</span>uizz
      </h1>
      <div>
        <h4 className="text-3xl font-semibold">
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
