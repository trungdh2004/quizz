import { getUserQuizz } from "@/action/action-userQuizz";
import { randomSlug } from "@/hook/random-slug";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug)
      return Response.json(
        {
          message: "Bạn chua nhập mã code",
        },
        {
          status: 404,
        }
      );

    const lesson = await db.lesson.findFirst({
      where: {
        slug: slug,
      },
    });

    if (!lesson)
      return Response.json(
        {
          message: "Không có lớp học nào có mã code này",
        },
        {
          status: 404,
        }
      );

    return Response.json(lesson.id, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        messgae: error.message,
      },
      { status: 500 }
    );
  }
}
