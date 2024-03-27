"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LuLoader2 } from "react-icons/lu";

const formSchema = z.object({
  code: z.string().min(6, "Mã code có 7 kí tự").max(7, "Mã code có 7 kí tự"),
});

const DialogSlug = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const { data } = await axios.post("/api/lesson/slug", {
          slug: values.code,
        });

        router.push(`/lesson/${data}`);
        return;
      } catch (error: any) {
        console.log(error);

        toast.error("Lỗi tìm kiếm");
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hidden sm:block" variant={"primary"} size={"sm"}>
          Nhập mã
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mời bạn nhập mã</DialogTitle>
          <DialogDescription>
            Nhập mã lớp học để làm bài quizz
          </DialogDescription>
        </DialogHeader>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mã code bài quizz</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mời bạn nhập ãm"
                        {...field}
                        maxLength={7}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={pending} variant={"secondary"}>
                {pending ? (
                  <LuLoader2 className="w-5 h-5 animate-spin text-white" />
                ) : (
                  "Tìm kiếm"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSlug;
