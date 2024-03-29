"use client";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LuLoader2 } from "react-icons/lu";

import { z } from "zod";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1, "Ban vui long nhap ten bai quizz").max(50),
  bgColor: z.string().min(2).max(50),
});

const SidebarCreate = () => {
  const [pending, startTrasition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      bgColor: "#0EA5E9",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTrasition(async () => {
      try {
        const { data } = await axios.post("/api/lesson", values);

        router.push(`/quizz/${data.id}/edit`);
      } catch (error) {
        toast({
          title: "Lỗi tạo lesson",
        });
      }
    });
  }

  return (
    <div className="w-full mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"primary"}
            className="w-full justify-center text-xl h-10"
            size={"lg"}
          >
            <IoAddCircleOutline className="w-5 h-5 mr-2 stroke-[5]" />
            Tạo mới
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md w-[80%]">
          <DialogHeader>
            <div className="flex items-center justify-center w-full mb-2">
              <Image src={"/logo.svg"} alt="Mascot" height={80} width={80} />
            </div>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên bài quizz</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                        disabled={pending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bgColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chọn màu cho bài quizz</FormLabel>
                    <FormControl>
                      <div className="w-full flex items-center justify-between">
                        <div
                          className="w-20 h-20 border-md flex items-center justify-center rounded-md"
                          style={{
                            backgroundColor: `${field.value}`,
                          }}
                        >
                          <Image
                            src={"/logo_quizz.png"}
                            alt=""
                            className="object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <Input
                          type="color"
                          placeholder="shadcn"
                          {...field}
                          className="w-[50%]"
                          disabled={pending}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="mb-4">
                <div className="flex flex-col gap-y-4 w-full">
                  <Button
                    type="submit"
                    variant={"primary"}
                    className="w-full"
                    size={"lg"}
                    disabled={pending}
                  >
                    {pending ? (
                      <LuLoader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Tạo bài quizz"
                    )}
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SidebarCreate;
