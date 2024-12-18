import { ClerkLoaded, ClerkLoading, SignOutButton } from "@clerk/nextjs";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "../ui/button";
import SidebarItem from "./SidebarItem";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { FaChartColumn } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { getUserQuizz } from "@/action/action-userQuizz";
import SidebarCreate from "./SidebarCreate";
import DialogSlug from "../nav/DialogSlug";

const routes = [
  {
    label: "Khám phá",
    icon: <FaMapMarkedAlt className="w-5 h-5 mr-2" />,
    href: "/learn",
  },
  {
    label: "Thư viện của tôi",
    icon: <TbBooks className="w-5 h-5 mr-2" />,
    href: "/my-library",
  },
  {
    label: "Báo cáo",
    icon: <FaChartColumn className="w-5 h-5 mr-2" />,
    href: "/report",
  },
];

interface Props {
  className?: string;
}

const Sidebar = async ({ className }: Props) => {
  const userQuizz = await getUserQuizz();

  return (
    <div
      className={cn(
        "flex lg:fixed top-0 lg:w-[200px] bg-white flex-col border-r border-r-slate-300 h-full p-4",
        className
      )}
    >
      {/* logo */}
      <Link href={"/learn"}>
        <div className="flex items-end pb-2  justify-center w-full">
          <Image src={"/logo.svg"} alt="" width={60} height={60} />
          <h4 className="text-3xl font-bold -ml-1 mb-1">uizz</h4>
        </div>
      </Link>

      {/* todo:user */}
      <div className="lg:w-full mt-2 p-2 rounded-md bg-sky-200 border-2 border-b-4 border-sky-400 flex flex-col justify-center items-center ">
        <div>
          <Image
            src={userQuizz?.imageSrc || "/mascot.svg"}
            alt="avatar"
            className="rounded-md"
            width={50}
            height={50}
          />
        </div>
        <p className="text-base text-slate-500 my-2 mb-0">
          {userQuizz?.username}
        </p>
      </div>
      {/*  */}
      {/* them cau hỏi */}

      <Suspense
        fallback={
          <div className="w-full mt-4">
            <Skeleton className="w-full h-10 rounded-md bg-slate-100" />
          </div>
        }
      >
        <SidebarCreate />
      </Suspense>
      <div className="lg:hidden w-full mt-2">
        <DialogSlug />
      </div>
      {/* item */}
      <div className="flex-1 flex-col flex gap-y-2 py-4">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            label={route.label}
            href={route.href}
            icon={route.icon}
          />
        ))}
      </div>

      {/* logout */}
      <div className="w-full">
        <ClerkLoading>
          <Skeleton className="h-11 w-full rounded-md" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignOutButton>
            <Button variant={"danger"} className="w-full justify-start" asChild>
              <Link href={"/"}>
                <LogOutIcon className="mr-2 w-5 h-5" /> Đăng xuất
              </Link>
            </Button>
          </SignOutButton>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
