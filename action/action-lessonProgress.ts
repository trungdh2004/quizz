import { create } from "zustand";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import axios from "axios";

export const getLessonProgressById = async (id: string) => {
  try {
    if (!id) {
      return null;
    }

    const lessonProgress = await db.lessonProgress.findFirst({
      where: {
        id,
      },
      include: {
        user: true,
        challengeProgress: true,
      },
    });
    if (!lessonProgress) return null;
    return lessonProgress;
  } catch (error) {
    return null;
  }
};

// challengeId completed
