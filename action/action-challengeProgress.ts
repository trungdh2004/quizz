import { db } from "@/lib/db";

export const createChallengeProgress = async (
  lessonProgressId: string,
  challengeId: string,
  completed: boolean
) => {
  if (!challengeId || !lessonProgressId) {
    throw new Error("Ban chua ghi day du du lieu");
  }

  const existingChallenge = await db.challenge.findFirst({
    where: {
      id: challengeId,
    },
  });

  if (!existingChallenge) throw new Error("khong co cau hoi nao");

  const newChallengeProgress = await db.challengeProgress.create({
    data: {
      challengeId: challengeId,
      lessonProgressId: lessonProgressId,
      completed,
    },
  });

  console.log("newChallengeProgress", newChallengeProgress);

  if (!newChallengeProgress)
    throw new Error("khong thanh cong moi ban nhap lai");

  return newChallengeProgress;
};
