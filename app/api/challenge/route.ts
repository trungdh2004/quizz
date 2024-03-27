import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { question, options, lessonId } = await req.json();
    console.log("gọi r =================================");

    if (!question || !options || !lessonId) {
      return Response.json(
        {
          message: "khong co day du du lieu",
        },
        {
          status: 404,
        }
      );
    }

    const existingLesson = await db.lesson.findFirst({
      where: {
        id: lessonId,
      },
    });

    if (!existingLesson) {
      return Response.json(
        {
          message: "khong lớp học",
        },
        {
          status: 404,
        }
      );
    }

    const newChallenge = await db.challenge.create({
      data: {
        question: question,
        lessonId: lessonId,
        challengeOption: {
          createMany: {
            data: options,
          },
        },
      },
      include: {
        challengeOption: true,
      },
    });

    if (!newChallenge) {
      return Response.json(
        {
          message: "Tạo thất bại",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        message: "Tạo thanh cong",
        data: newChallenge,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error create challengeProgress", error);
    return Response.json({ message: "Loi server" }, { status: 500 });
  }
}
