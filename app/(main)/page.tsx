import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import BannerLeft from "./_components/BannerLeft";
import axios from "axios";
import FormCode from "./_components/FormCode";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="lg:max-w-screen-lg flex sm:flex-row flex-col items-center h-full mx-auto w-full px-4 lg:px-8 py-8 lg:py-[120px]">
      <BannerLeft isLogin={!!userId} />

      <div className="w-full lg:w-[50%] sm:h-full flex flex-col items-center sm:mt-0 mt-8 sm:items-end justify-start ">
        <div>
          <h4 className="text-slate-500">Nhập mã tham gia bài học</h4>
          <FormCode userId={userId} />
        </div>
      </div>
    </div>
  );
}
