"use client";
import React, { useTransition } from "react";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { LuLoader2 } from "react-icons/lu";

const formSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Moi ban nhap ten",
    })
    .max(20, {
      message: "Ten ban qua dai",
    }),
});

interface Props {
  lessonId: string;
}

const FormName = ({ lessonId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const { data } = await axios.post(`/api/lesson/${lessonId}`, values);

        router.push(`/lesson/${lessonId}/running/${data.data.id}`);
      } catch (error) {
        toast({
          title: "Server xảy ra lỗi mời bạn load lại trang web",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-400">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name..."
                  {...field}
                  className="sm:p-3 text-base sm:text-[20px] h-10 p-2 sm:h-[50px]"
                  spellCheck={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"secondary"}
          className="w-full sm:py-6 text-xl mt-4"
          disabled={isPending}
        >
          {isPending ? (
            <LuLoader2 className="w-6 h-6 animate-spin" />
          ) : (
            "Tham gia"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default FormName;
