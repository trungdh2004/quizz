import { db } from "@/lib/db";

export const getAllLessonSystem = async () => {
  try {
    const lessonSystem = await db.lesson.findMany({
      where: {
        isSystem: true,
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

export const getLessonByIdAndChallengeAndUserId = async (id: string) => {
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
        userQuizz: true,
      },
    });

    return lessonSystem;
  } catch (error) {
    return null;
  }
};
