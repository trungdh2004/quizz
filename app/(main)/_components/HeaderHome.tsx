import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { ArrowRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderHome = () => {
  return (
    <div className="w-full h-16 px-4 border-b border-slate-300 backdrop-blur-lg ">
      <div className="h-full lg:max-w-screen-lg flex items-center justify-between mx-auto">
        <div className="flex items-end">
          <Image
            src={"/logo.svg"}
            alt="quizz"
            width={50}
            height={50}
            className="object-cover"
          />
          <h3 className="text-xl font-bold mb-1 -ml-1">uizz</h3>
        </div>

        <div>
          <ClerkLoading>
            <Skeleton className="w-[100px] h-[40px] rounded-md" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button variant={"primaryOutline"} asChild>
                <Link href="/learn">
                  Trang điều khiển <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl="/">
                <Button size={"rounded"} variant={"primary"} className="w-full">
                  Đăng nhập
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
