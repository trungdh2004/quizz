import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id)
      return Response.json(
        {
          message: "Bạn chưa có id",
        },
        {
          status: 404,
        }
      );

    const existingChallenge = await db.challenge.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!existingChallenge) {
      return Response.json(
        {
          message: "Không có câu hỏi nào",
        },
        {
          status: 404,
        }
      );
    }

    const deleteChallenge = await db.challenge.delete({
      where: {
        id: params.id,
      },
    });

    return Response.json(deleteChallenge, {
      status: 200,
    });
  } catch (error) {
    console.log("Error create challengeProgress", error);
    return Response.json({ message: "Loi server" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { question, options, lessonId, optionId } = await req.json();
    if (!params.id)
      return Response.json(
        {
          message: "Bạn chưa có id",
        },
        {
          status: 404,
        }
      );

    if (!question || !options || !lessonId || !optionId) {
      return Response.json(
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
        id: params.id,
      },
    });

    if (!existingChallenge) {
      return Response.json(
        {
          message: "Không có câu hỏi nào",
        },
        {
          status: 404,
        }
      );
    }

    const deleteChellengeOptions = await db.challengeOption.deleteMany({
      where: {
        challengeId: params.id,
      },
    });

    const updateChallenge = await db.challenge.update({
      where: {
        id: params.id,
      },
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

    return Response.json(updateChallenge, {
      status: 200,
    });
  } catch (error) {
    console.log("Error create challengeProgress", error);
    return Response.json({ message: "Loi server" }, { status: 500 });
  }
}
