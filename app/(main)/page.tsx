import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import BannerLeft from "./_components/BannerLeft";
import axios from "axios";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="lg:max-w-screen-lg flex items-center h-full mx-auto w-full px-4 lg:px-8 py-8 lg:py-[120px]">
      <BannerLeft isLogin={!!userId} />

      <div className="w-full lg:w-[50%] h-full flex flex-col items-end justify-start ">
        <div>
          <h4 className="text-slate-500">Nhập mã tham gia bài học</h4>
          <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-md">
            <Input
              placeholder="Mã code"
              className="border-none outline-none ring-0 active:ring-0 text-base"
            />
            <Button
              variant={"primary"}
              disabled={!userId}
              className="pointer-events-none"
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
