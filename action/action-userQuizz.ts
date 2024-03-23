import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import axios from "axios";

export const getUserQuizz = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return null;
    }

    const userQuizz = await db.userQuizz.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!userQuizz) {
      return null;
    }
    return userQuizz;
  } catch (error) {
    return null;
  }
};
