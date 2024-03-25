import { getUserQuizz } from "@/action/action-userQuizz";
import { randomSlug } from "@/hook/random-slug";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const user = await getUserQuizz();
    const data = await req.json();
    const slug = await randomSlug();

    if (!userId || !user) {
      return Response.json({ message: "khong dang nhap" }, { status: 404 });
    }

    if (!data.title || !data.bgColor) {
      return Response.json({ message: "Ban chua nhap ten" }, { status: 404 });
    }

    const newLesson = await db.lesson.create({
      data: {
        title: data.title,
        imageSrc: data.bgColor,
        userId: user.id,
        slug: slug,
      },
    });

    return Response.json(newLesson, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        messgae: error.message,
      },
      { status: 500 }
    );
  }
}
