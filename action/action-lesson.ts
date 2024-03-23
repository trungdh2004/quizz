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
