import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    const current = await currentUser();

    if (!userId)
      throw NextResponse.json(
        {
          message: "Ban chua dang nhap",
        },
        { status: 401 }
      );

    const userQuizz = await db.userQuizz.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!userQuizz) {
      await db.userQuizz.create({
        data: {
          userId: userId,
          username: `${current?.firstName} ${current?.lastName}`,
          imageSrc: current?.imageUrl || "/mascot.svg",
        },
      });
    }

    
  } catch (error) {}
}
