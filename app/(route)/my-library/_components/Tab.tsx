import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { PiBooksLight } from "react-icons/pi";

export function TabsDemo() {
  return (
    <Tabs defaultValue="publish" className="w-full">
      <TabsList className="grid grid-cols-2 max-w-[480px] border">
        <TabsTrigger value="publish">Xuất bản</TabsTrigger>
        <TabsTrigger value="draft">Bản nháp</TabsTrigger>
      </TabsList>
      <TabsContent value="publish">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full p-2 rounded-md flex bg-white h-auto hover:bg-[#f9f9f9] cursor-pointer border">
            <div>
              <div className="w-20 h-20 sm:w-[110px] sm:h-[110px] bg-sky-500 flex items-center justify-center rounded-sm">
                <Image
                  src="/logo_quizz.png"
                  alt="lesson"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="w-full ml-2 flex-1 flex justify-between">
              <div className=" flex-1 w-full flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="py-0.5 text-[10px]">
                    Quiz
                  </Badge>
                </div>
                <div className="w-full">
                  <h1 className="font-[800] w-full line-clamp-1">
                    Tên bai lesson
                  </h1>
                </div>
                <div className="w-full flex items-center text-sm">
                  <div className="flex items-center mr-3">
                    <MdOutlineFormatListBulleted className="w-[14px] h-[14px] mr-1" />
                    <span className="text-xs leading-3">20 câu hỏi</span>
                  </div>
                  <div className="mr-3">
                    <PiGraduationCap className="text-sm" />
                  </div>
                  <div>
                    <PiBooksLight className="text-sm" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-3">
                    <Image
                      src={"/mascot.svg"}
                      alt="avatar"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center text-xs text-slate-600 gap-1">
                    <span>Dh Trung</span>
                    <span>*</span>
                    <span>4 tháng trước</span>
                  </div>
                </div>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FaEllipsisVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="draft"></TabsContent>
    </Tabs>
  );
}
