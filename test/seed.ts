import { randomSlug } from "@/hook/random-slug";
import { db } from "@/lib/db";

const runSeed = async () => {
  try {
    console.log("run seed");

    await db.lesson.deleteMany({});

    await db.lesson.createMany({
      data: [
        {
          title: "Bai hoc thu 1",
          isSystem: true,
          userId: "65fd8fa92191785f788b5a4c",
          slug: randomSlug(),
        },
        {
          title: "Bai hoc thu 2",
          isSystem: true,
          userId: "65fd8fa92191785f788b5a4c",
          slug: randomSlug(),
        },
        {
          title: "Bai hoc thu 3",
          isSystem: true,
          userId: "65fd8fa92191785f788b5a4c",
          slug: randomSlug(),
        },
        {
          title: "Bai hoc thu 4",
          isSystem: true,
          userId: "65fd8fa92191785f788b5a4c",
          slug: randomSlug(),
        },
        {
          title: "Bai hoc thu 5",
          isSystem: true,
          userId: "65fd8fa92191785f788b5a4c",
          slug: randomSlug(),
        },
      ],
    });

    console.log("finish seed");
  } catch (error) {
    console.log(error);
  }
};

runSeed();
