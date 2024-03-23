import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST() {
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

    const existingUserQuizz = await db.userQuizz.findFirst({
      where: {
        userId: userId,
      },
    });

    if (existingUserQuizz) {
      return NextResponse.json(
        {
          message: "Ban da dang ki",
          data: existingUserQuizz,
        },
        {
          status: 200,
        }
      );
    }

    const newUserQuizz = await db.userQuizz.create({
      data: {
        userId: userId,
        username: `${current?.firstName} ${current?.lastName}`,
        imageSrc: current?.imageUrl || "/mascot.svg",
      },
    });

    return NextResponse.json(
      {
        messgae: "Ban da dang ki thanh cong",
        data: newUserQuizz,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("userQuizz error: ", error);
    throw NextResponse.json(
      {
        messgae: "Server xay ra loi",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
