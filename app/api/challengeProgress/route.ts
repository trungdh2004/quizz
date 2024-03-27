import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { lessonProgressId, challengeId, completed } = await req.json();

    if (!challengeId || !lessonProgressId) {
      throw Response.json(
        {
          message: "khong co day du du lieu",
        },
        {
          status: 404,
        }
      );
    }

    const existingChallenge = await db.challenge.findFirst({
      where: {
        id: challengeId,
      },
    });

    if (!existingChallenge) {
      throw Response.json({ message: "Khong co lop hoc nao" }, { status: 404 });
    }

    const existingLessonProgress = await db.lessonProgress.findFirst({
      where: {
        id: lessonProgressId,
      },
    });

    if (!existingLessonProgress) {
      throw Response.json(
        { message: "Khong co nguoi hoc nao" },
        { status: 404 }
      );
    }

    const newChallengeProgress = await db.challengeProgress.create({
      data: {
        challengeId: challengeId,
        lessonProgressId: lessonProgressId,
        completed,
      },
    });

    if (!newChallengeProgress) {
      throw Response.json({ message: "Khong tạo thành công" }, { status: 404 });
    }

    return Response.json(
      {
        message: "Tạo thanh cong",
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
