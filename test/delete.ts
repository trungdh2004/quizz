import { randomSlug } from "@/hook/random-slug";
import { db } from "@/lib/db";

const runSeed = async () => {
  try {
    console.log("run delete");

    await db.lesson.deleteMany({});

    console.log("finish delete");
  } catch (error) {
    console.log(error);
  }
};

runSeed();
