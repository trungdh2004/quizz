import { ChallengeProgress } from "@prisma/client";
import { db } from "@/lib/db";
import { getUserQuizz } from "./action-userQuizz";

export const getAllLessonSystem = async () => {
  try {
    const lessonSystem = await db.lesson.findMany({
      where: {
        isSystem: true,
      },
      orderBy: {
        title: "asc",
      },
      include: {
        challenges: true,
        lessonProgress: true,
      },
    });

    return lessonSystem;
  } catch (error) {
    return [];
  }
};

export const getLessonById = async (id: string) => {
  try {
    const lessonSystem = await db.lesson.findFirst({
      where: {
        id: id,
      },
    });

    return lessonSystem;
  } catch (error) {
    return null;
  }
};

export const getLessonByIdAndChallenge = async (id: string) => {
  try {
    const lessonSystem = await db.lesson.findFirst({
      where: {
        id: id,
      },
      include: {
        challenges: {
          include: {
            challengeOption: true,
          },
        },
      },
    });

    return lessonSystem;
  } catch (error) {
    return null;
  }
};

export const getLessonByIdAndChallengeAndUserIdAndLessonProgress = async (
  id: string
) => {
  try {
    const lessonSystem = await db.lesson.findFirst({
      where: {
        id: id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        challenges: {
          include: {
            challengeOption: true,
          },
        },
        userQuizz: true,
        lessonProgress: {
          include: {
            challengeProgress: true,
          },
        },
      },
    });

    return lessonSystem;
  } catch (error) {
    return null;
  }
};

export const getLessonByUserId = async () => {
  try {
    const userQuizz = await getUserQuizz();

    const lesson = await db.lesson.findMany({
      where: {
        userId: userQuizz?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        challenges: true,
        userQuizz: true,
      },
    });

    return lesson;
  } catch (error) {
    return [];
  }
};

export const getLessonReport = async () => {
  try {
    const userQuizz = await getUserQuizz();

    const lesson = await db.lesson.findMany({
      where: {
        userId: userQuizz?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        lessonProgress: {
          include: {
            challengeProgress: true,
          },
        },
      },
    });

    return lesson;
  } catch (error) {
    return [];
  }
};

export const getLessonBySlug = async (slug: string) => {
  try {
    if (!slug) return null;

    const lesson = await db.lesson.findFirst({
      where: {
        slug: slug,
      },
    });

    if (!lesson) return null;
    return lesson.id;
  } catch (error) {
    return null;
  }
};
