import { getUserQuizz } from "@/action/action-userQuizz";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const { userId } = await auth();
    const user = await getUserQuizz();
    const data = await req.json();

    if (!params.lessonId || params.lessonId.length < 12) {
      return Response.json(
        { message: "Id lesson bạn bị lỗi" },
        { status: 404 }
      );
    }

    if (!userId || !user) {
      return Response.json({ message: "khong dang nhap" }, { status: 404 });
    }

    if (!data.username) {
      return Response.json({ message: "Ban chua nhap ten" }, { status: 404 });
    }

    const lesson = await db.lesson.findFirst({
      where: {
        id: params.lessonId,
      },
    });

    if (!lesson) {
      return Response.json({ message: "khon co lop hoc " }, { status: 404 });
    }

    const newLessonProgress = await db.lessonProgress.create({
      data: {
        name: data.username,
        userId: user.id,
        lessonId: lesson?.id,
      },
    });

    return Response.json(
      { data: newLessonProgress },
      {
        status: 200,
      }
    );
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
